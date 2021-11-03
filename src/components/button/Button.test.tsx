import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { theme } from "@theme/theme";
import { ThemeProvider } from "styled-components";

import { IChildrenProps } from "@interfaces/children.interfaces";

const TestProviders = ({ children }: IChildrenProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Button component", () => {
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(
      <TestProviders>
        <Button onClick={handleClick}>Click Me</Button>
      </TestProviders>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
