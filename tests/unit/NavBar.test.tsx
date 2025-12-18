import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../../src/app/components/NavBar';

describe('NavBar component', () => {
  it('renders navigation links', () => {
    render(<NavBar />);
    // basic existence checks
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('expertise')).toBeInTheDocument();
    expect(screen.getByText('work')).toBeInTheDocument();
    expect(screen.getByText('experience')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
  });

  it('responds to hover on a nav item', () => {
    render(<NavBar />);
    const homeLink = screen.getByText('home');
    fireEvent.mouseOver(homeLink);
    // hover shouldn't remove element; just ensure it still exists
    expect(screen.getByText('home')).toBeInTheDocument();
  });
});
