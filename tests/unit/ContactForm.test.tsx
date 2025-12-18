import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../../src/app/components/ContactForm';

// Mock fetch for API calls
global.fetch = jest.fn();

describe('ContactForm Component', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('renders contact form with inputs', () => {
    render(<ContactForm />);
    
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('submits form with user input', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Message sent!' }),
    });

    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill form
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    // Submit
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Message sent!')).toBeInTheDocument();
    });

    // Verify fetch was called
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Test message',
        }),
      })
    );
  });

  it('displays error on API failure', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      text: async () => 'Server error',
    });

    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill and submit
    await user.type(screen.getByPlaceholderText('Name'), 'John');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for error indicator and detailed message
    await waitFor(() => {
      expect(screen.getByText('✗ Error')).toBeInTheDocument();
      expect(screen.getByText(/Server error/i)).toBeInTheDocument();
    });
  });

  it('disables submit button while sending', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 500))
    );

    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill and submit
    await user.type(screen.getByPlaceholderText('Name'), 'John');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Button should be disabled while sending
    expect(submitButton).toBeDisabled();

    // Wait for submission to complete
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    }, { timeout: 1000 });
  });
});
