import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("hello tests", () => {
  it("renders hello world", () => {
    render(<Hello />);
    const myElement = screen.getByText("hello world");
    expect(myElement).toBeInTheDocument();
  });
});
