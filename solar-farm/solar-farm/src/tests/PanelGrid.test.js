import React from 'react';
import { render } from '@testing-library/react';
import PanelGrid from '../components/PanelGrid';

describe('PanelGrid component', () => {
  test('renders panels with correct props', () => {
    // Mock panel data
    const panels = [
      { id: 1, wattage: 100, voltage: 10 },
      { id: 2, wattage: 150, voltage: 15 },
      { id: 3, wattage: 200, voltage: 20 },
    ];

    // Render component with mock data
    const { getAllByTestId } = render(<PanelGrid panels={panels} />);

    // Verify the correct number of Panel components are rendered
    const panelComponents = getAllByTestId('panel-component');
    expect(panelComponents.length).toBe(panels.length);
  });
});