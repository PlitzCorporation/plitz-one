import NotFoundPage from "@pages/404";
import { render, screen } from "@testing-library/react";

describe("404", () => {
  it("renders a heading", () => {
    render(<NotFoundPage />);

    const heading = screen.getByText(/not found/i);

    expect(heading).toBeInTheDocument();
  });
});
