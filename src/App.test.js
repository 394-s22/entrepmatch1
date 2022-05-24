import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('shows the micro title', async () => {
  render(<App />);
  const title = await screen.findByText(/🚀 micro/i);
  expect(title).toBeInTheDocument();
});

it('shows Sign In if not logged in', async () => {
  render(<App />);
  const button = await screen.findByText(/Sign In/i);
  expect(button).toBeInTheDocument();
});