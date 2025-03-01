import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to the college management project/i);
  expect(welcomeElement).toBeInTheDocument();
});