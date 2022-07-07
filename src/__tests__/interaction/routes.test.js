import { render, screen } from '@testing-library/react';
import Quote from '../../routes/Quote';
import '@testing-library/jest-dom/extend-expect';

test('render learn react link', () => {
  render(<Quote />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeInTheDocument();
});
