import { render, screen } from '@testing-library/react';
import Quote from '../../routes/Quote';
import '@testing-library/jest-dom/extend-expect';

test('render learn react link', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/This is Quote Page/i);
  expect(linkElement).toBeInTheDocument();
});

test('There should be a heading in the quote page', () => {
  render(<Quote />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});
