import Home from "../../src/app/page";
import "@testing-library/jest-dom";
import { mount, screen } from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";
import "next-router-mock";

const pushMock = jest.fn();

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    // return mock for push method
    push: pushMock,
    // ... add the props or methods you need
  }),
}));

describe("Home page", () => {
  it("renders the correct h1", () => {
    mount(<Home />);
    const h1 = screen.getByText("Welcome to OpenAgent.");
    expect(h1).toBeInTheDocument();
  });
});
