import { render, screen } from '@testing-library/react';
import Navigation from '../../components/Navigation';

test('render learn react link', () => {
  render(<Navigation />);
  const linkElement = screen.getByRole(/Quote/);
  expect(linkElement).toBeInTheDocument();
});
