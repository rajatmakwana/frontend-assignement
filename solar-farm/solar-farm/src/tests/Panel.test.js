import React from 'react';
import { render } from '@testing-library/react';
import Panel from '../components/Panel';
import '@testing-library/jest-dom/extend-expect'; 

describe('Panel component', () => {
  test('renders panel information', () => {
    // Mock panel data
    const panelData = {
      id: '123',
      wattage: 100,
      voltage: 11,
    };

    // Render component with mock data
    const { getByText } = render(<Panel {...panelData} />);

    // Verify panel information is rendered
    expect(getByText(/Solar Panel ID:/i)).toBeInTheDocument();
    expect(getByText(/123/i)).toBeInTheDocument();
    expect(getByText(/Wattage:/i)).toBeInTheDocument();
    expect(getByText(/100/i)).toBeInTheDocument();
    expect(getByText(/Voltage:/i)).toBeInTheDocument();
    expect(getByText(/11/i)).toBeInTheDocument();
  });
});
