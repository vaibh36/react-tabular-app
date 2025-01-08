import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TableHeader from "../components/TableHeader";

describe("TableHeader", () => {
  const mockHandleSort = jest.fn();

  it("renders SortableHeader components with correct props", () => {
    const sortConfig = { key: "title", direction: "asc" };

    const { getByText } = render(
      <TableHeader sortConfig={sortConfig} handleSort={mockHandleSort} />
    );

    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Assigned")).toBeInTheDocument();
    expect(getByText("Status")).toBeInTheDocument();
    expect(getByText("Priority")).toBeInTheDocument();
    expect(getByText("Start Date")).toBeInTheDocument();
    expect(getByText("End Date")).toBeInTheDocument();
    expect(getByText("Actions")).toBeInTheDocument();
  });

  it("calls handleSort with the correct key when SortableHeader is clicked", () => {
    const sortConfig = { key: "title", direction: "asc" };

    const { getByText } = render(
      <TableHeader sortConfig={sortConfig} handleSort={mockHandleSort} />
    );

    fireEvent.click(getByText("Title"));

    expect(mockHandleSort).toHaveBeenCalledTimes(1);
    expect(mockHandleSort).toHaveBeenCalledWith("title");

    fireEvent.click(getByText("Assigned"));
    expect(mockHandleSort).toHaveBeenCalledTimes(2);
    expect(mockHandleSort).toHaveBeenCalledWith("assigned");
  });

  it("renders non-sortable TableCells correctly", () => {
    const sortConfig = { key: "title", direction: "asc" };

    const { getByText } = render(
      <TableHeader sortConfig={sortConfig} handleSort={mockHandleSort} />
    );

    expect(getByText("Start Date")).toBeInTheDocument();
    expect(getByText("End Date")).toBeInTheDocument();
    expect(getByText("Actions")).toBeInTheDocument();
  });
  it("calls handleSort with the correct key when SortableHeader is clicked for status", () => {
    const sortConfig = { key: "status", direction: "asc" };

    const { getByText } = render(
      <TableHeader sortConfig={sortConfig} handleSort={mockHandleSort} />
    );

    fireEvent.click(getByText("Status"));

    expect(mockHandleSort).toHaveBeenCalledTimes(3);
    expect(mockHandleSort).toHaveBeenCalledWith("status");
  });
});
