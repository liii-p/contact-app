import ThankYouPage from "@/app/thank-you/page";
import { render, screen } from "@testing-library/react";
import { expect, jest, describe } from "@jest/globals";

describe("<ThankYouPage />", () => {
  /*
  Give the user has been redirected to the thank you page
  When they are viewing the thank you pagee
  Then the page renders properly
  */
  it("renders the thank you page", () => {
    render(<ThankYouPage />);

    const text = screen.getByRole("heading");
    expect(text).toBeInTheDocument();

    const link = screen.getByText("Return to Home.");
    expect(link).toBeInTheDocument();
  });

  it("has the correct href on the 'return to home' link", () => {
    render(<ThankYouPage />);

    const link = screen.getByText("Return to Home.");
    expect(link).toHaveAttribute("href", "/");
  });
});
