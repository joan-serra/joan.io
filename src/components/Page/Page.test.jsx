import React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

test('just checking', () => {
  const { getByText } = render(<Page />);
  const linkElement = getByText(/Hello, stranger/i);
  expect(linkElement).toBeInTheDocument();
});
