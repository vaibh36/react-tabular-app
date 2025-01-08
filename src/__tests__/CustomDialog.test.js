import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomDialog from "../components/CustomDialog";

describe("CustomDialog", () => {
  it("renders the dialog when open is true", () => {
    const { getByText } = render(
      <CustomDialog
        open={true}
        onClose={() => {}}
        title="Test Title"
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    );

    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("does not render the dialog when open is false", () => {
    const { queryByText } = render(
      <CustomDialog
        open={false}
        onClose={() => {}}
        title="Test Title"
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    );

    expect(queryByText("Test Title")).not.toBeInTheDocument();
  });

  it("calls onCancel when the cancel button is clicked", () => {
    const mockOnCancel = jest.fn();
    const { getByText } = render(
      <CustomDialog
        open={true}
        onClose={() => {}}
        title="Test Title"
        onCancel={mockOnCancel}
        onConfirm={() => {}}
      />
    );

    fireEvent.click(getByText("Cancel"));
    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when the confirm button is clicked", () => {
    const mockOnConfirm = jest.fn();
    const { getByText } = render(
      <CustomDialog
        open={true}
        onClose={() => {}}
        title="Test Title"
        onCancel={() => {}}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.click(getByText("Save"));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it("renders custom labels for cancel and confirm buttons", () => {
    const { getByText } = render(
      <CustomDialog
        open={true}
        onClose={() => {}}
        title="Test Title"
        onCancel={() => {}}
        onConfirm={() => {}}
        cancelLabel="Close"
        confirmLabel="Confirm"
      />
    );

    expect(getByText("Close")).toBeInTheDocument();
    expect(getByText("Confirm")).toBeInTheDocument();
  });
});
