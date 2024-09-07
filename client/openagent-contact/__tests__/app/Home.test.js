import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, describe } from "@jest/globals";
import { useRouter } from "next/navigation";

afterAll(() => {
  jest.clearAllMocks();
});

describe("Home page", () => {
  jest.mock("next/navigation");

  const pushMock = jest.fn();
  useRouter.mockReturnValue({
    push: pushMock,
    route: "/thank-you",
    query: {},
  });

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
  /*
  Given the user has launched the web app
  When the app is loaded
  Then the welcome text and input form renders
*/
  it("renders the text and input form correctly", () => {
    render(<Home />);
    const heading = screen.getByText("Welcome to OpenAgent.");
    const input = screen.getAllByRole("textbox");
    expect(heading).toBeInTheDocument();
    expect(input).toBeTruthy();
  });

  /*
  Given the user wants to fill in the form
  When the user clicks and enters text in the input fields
  Then the fields contain that text
  */
  it("redirects the user when the form has been filled and the submit button is clicked", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const firstName = screen.getByLabelText("First Name");
    await user.type(firstName, "Testing");
    expect(firstName).toHaveValue("Testing");

    const lastName = screen.getByLabelText("Last Name");
    await user.type(lastName, "Tester");
    expect(lastName).toHaveValue("Tester");

    const email = screen.getByLabelText("Email Address");
    await user.type(email, "test@gmail.com");
    expect(email).toHaveValue("test@gmail.com");

    const phone = screen.getByLabelText("Phone Number");
    await user.type(phone, "0412345678");
    expect(phone).toHaveValue("0412345678");

    const note = screen.getByLabelText("Note");
    await user.type(note, "This is a note!");
    expect(note).toHaveValue("This is a note!");
  });
});
