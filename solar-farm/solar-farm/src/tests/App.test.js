const React = require('react');
const { render, waitFor } = require('@testing-library/react');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const App = require('../App').default; // Importing the default export from the App module

// Your test code...


test('renders solar-farm app', () => {
  render(<App />);
  const linkElement = screen.getByText(/solar-farm-monitor-dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
