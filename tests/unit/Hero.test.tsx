import { render } from '@testing-library/react';
import React from 'react';
import Hero from '../../src/app/components/Hero';

describe('Hero Component', () => {
  it('renders hero section with title', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section#home');
    expect(section).toBeInTheDocument();
  });

  it('renders Moss Victor heading', () => {
    const { getByText } = render(<Hero />);
    const heading = getByText('Moss Victor');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('renders social links', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('GitHub')).toBeInTheDocument();
    expect(getByText('Dev.to')).toBeInTheDocument();
    expect(getByText('Medium')).toBeInTheDocument();
  });

  it('has correct GitHub link href', () => {
    const { getByText } = render(<Hero />);
    const githubLink = getByText('GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Moss-Topman');
  });
});
