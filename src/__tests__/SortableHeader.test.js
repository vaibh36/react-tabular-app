import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SortableHeader from "../components/SortableHeader"; // Adjust the import path based on your file structure
import { TableSortLabel } from "@mui/material";

describe("SortableHeader", () => {
  it("renders the label correctly", () => {
    const { getByText } = render(
      <SortableHeader
        label="Test Label"
        active={false}
        direction="asc"
        onSort={() => {}}
      />
    );

    expect(getByText("Test Label")).toBeInTheDocument();
  });

  it("fires the onSort callback when clicked", () => {
    const mockOnSort = jest.fn();
    const { getByText } = render(
      <SortableHeader
        label="Test Label"
        active={false}
        direction="asc"
        onSort={mockOnSort}
      />
    );

    fireEvent.click(getByText("Test Label"));
    expect(mockOnSort).toHaveBeenCalledTimes(1);
  });
});
