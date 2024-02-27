import { render, screen } from '@testing-library/react';
import App from './App';


test('Rendering', () => {
  render(<Booking />);
  const buttonElement = screen.getByRole("button", {name: "Book Now"});
  expect(buttonElement).toBeInTheDocument();
})
