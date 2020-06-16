import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Select from "./Select";

describe("Select event registration", () => {
  test("`fireEvent.change` should trigger an onChange event", () => {
    const mockTest = jest.fn().mockImplementation(val => console.log(val));
    const { getByTestId } = render(<Select test={mockTest} />);
    const select = getByTestId("select");
    const second = getByTestId("second");

    fireEvent.change(select, { target: { value: "second" } });

    expect(mockTest).toHaveBeenCalledTimes(1);
    expect(mockTest).toHaveBeenCalledWith('second');
    expect(second.selected).toBe(true);
  });
  test("`userEvent.selectOptions` should trigger an onChange event", () => {
    const mockTest = jest.fn().mockImplementation(val => console.log(val));
    const { getByTestId, debug } = render(<Select test={mockTest} />);
    const select = getByTestId("select");
    const second = getByTestId("second");

    userEvent.selectOptions(select, ["second"]);

    expect(mockTest).toHaveBeenCalledTimes(1);
    expect(mockTest).toHaveBeenCalledWith('second');
    expect(second.selected).toBe(true);
  });
});
