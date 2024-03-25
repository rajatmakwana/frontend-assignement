import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {
  test('renders logo and title', () => {
    // Render the component
    const { getByAltText, getByText } = render(<Header />);

    // Verify that the logo is rendered
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    // Verify that the title is rendered
    const title = getByText('Solar Panel Monitoring Dashboard');
    expect(title).toBeInTheDocument();
  });
});
