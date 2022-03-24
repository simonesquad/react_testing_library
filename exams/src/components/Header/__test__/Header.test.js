import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', async () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading", { name: "My Header" })
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTitle("Header")
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTestId("header-1")
    expect(headingElement).toBeInTheDocument();
  });