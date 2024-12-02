import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './contact-form'; // Adjust the path if needed

describe('ContactForm', () => {
  it('renders the form fields correctly', () => {
    render(<ContactForm onClose={jest.fn()} />);

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mobile Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
  });

  it('displays validation errors when form is submitted empty', async () => {
    render(<ContactForm onClose={jest.fn()} />);

    fireEvent.click(screen.getByText(/Send Message/i));

    await waitFor(() => {
      expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Mobile number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
    });
  });

  
   
 

  it('displays a random image', async () => {
    render(<ContactForm onClose={jest.fn()} />);

    await waitFor(() => {
      const image = screen.getByAltText(/Random local image/i);
      expect(image).toBeInTheDocument();
      expect(image.src).toContain('https://via.placeholder.com/300'); // Checks that a random image is displayed
    });
  });
});
