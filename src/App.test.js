import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('just checking', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello stranger/i);
  expect(linkElement).toBeInTheDocument();
});
