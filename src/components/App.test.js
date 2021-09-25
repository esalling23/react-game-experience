import { render, screen } from '@testing-library/react';
import App from './App';

test('renders map component', () => {
  render(<App />);
  const mapElement = screen.getByTestId('app')
  expect(mapElement).toBeInTheDocument()
});
