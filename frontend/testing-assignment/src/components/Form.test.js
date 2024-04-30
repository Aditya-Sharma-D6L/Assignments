import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form Component", () => {
  it("renders all form fields correctly", () => {
    render(<Form />);
    expect(screen.getByLabelText("First Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Check this box")).toBeInTheDocument();
    expect(screen.getByLabelText("Select an option:")).toBeInTheDocument();
    expect(screen.getByLabelText("Radio Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Radio Option 2")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("updates input fields correctly", () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText("First Name:"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name:"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "john.doe@example.com" },
    });

    expect(screen.getByLabelText("First Name:")).toHaveValue("John");
    expect(screen.getByLabelText("Last Name:")).toHaveValue("Doe");
    expect(screen.getByLabelText("Email:")).toHaveValue("john.doe@example.com");
  });

  it("toggles checkbox state correctly", () => {
    render(<Form />);
    const checkbox = screen.getByLabelText("Check this box");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("updates dropdown selection correctly", () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText("Select an option:"), {
      target: { value: "option2" },
    });

    expect(screen.getByLabelText("Select an option:")).toHaveValue("option2");
  });

  it("updates radio button selection correctly", () => {
    render(<Form />);
    fireEvent.click(screen.getByLabelText("Radio Option 2"));

    expect(screen.getByLabelText("Radio Option 2")).toBeChecked();
  });

  it("submits form data correctly", () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText("First Name:"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name:"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.click(screen.getByLabelText("Check this box"));
    fireEvent.change(screen.getByLabelText("Select an option:"), {
      target: { value: "option1" },
    });
    fireEvent.click(screen.getByLabelText("Radio Option 1"));
    fireEvent.click(screen.getByText("Submit"));
  });
});
