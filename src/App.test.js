import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders angle converter link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Angle Converter/i);
  expect(linkElement).toBeInTheDocument();
});