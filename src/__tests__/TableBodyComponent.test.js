import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TableBodyComponent from "../components/TableBodyComponent";

describe("TableBodyComponent", () => {
  const mockHandleEditOpen = jest.fn();
  const mockHandleDeleteRow = jest.fn();

  const data = [
    {
      id: 1,
      title: "Test Task 1",
      assigned: "User 1",
      status: "Pending",
      priority: "High",
      startDate: "2025-01-01",
      endDate: "2025-01-02",
    },
    {
      id: 2,
      title: "Test Task 2",
      assigned: "User 2",
      status: "Completed",
      priority: "Medium",
      startDate: "2025-01-03",
      endDate: "2025-01-04",
    },
  ];

  it("renders table rows with correct data", () => {
    const { getByText } = render(
      <TableBodyComponent
        data={data}
        handleEditOpen={mockHandleEditOpen}
        handleDeleteRow={mockHandleDeleteRow}
      />
    );

    expect(getByText("Test Task 1")).toBeInTheDocument();
    expect(getByText("User 1")).toBeInTheDocument();
    expect(getByText("Pending")).toBeInTheDocument();
    expect(getByText("High")).toBeInTheDocument();
    expect(getByText("2025-01-01")).toBeInTheDocument();
    expect(getByText("2025-01-02")).toBeInTheDocument();

    expect(getByText("Test Task 2")).toBeInTheDocument();
    expect(getByText("User 2")).toBeInTheDocument();
    expect(getByText("Completed")).toBeInTheDocument();
    expect(getByText("Medium")).toBeInTheDocument();
    expect(getByText("2025-01-03")).toBeInTheDocument();
    expect(getByText("2025-01-04")).toBeInTheDocument();
  });

  it("calls handleEditOpen when Edit button is clicked", () => {
    const data = [
      {
        id: 1,
        title: "Test Task 1",
        assigned: "User 1",
        status: "Pending",
        priority: "High",
        startDate: "2025-01-01",
        endDate: "2025-01-02",
      },
    ];
    const { getByText } = render(
      <TableBodyComponent
        data={data}
        handleEditOpen={mockHandleEditOpen}
        handleDeleteRow={mockHandleDeleteRow}
      />
    );

    fireEvent.click(getByText("Edit"));

    expect(mockHandleEditOpen).toHaveBeenCalledTimes(1);
    expect(mockHandleEditOpen).toHaveBeenCalledWith(data[0]);
  });

  it("calls handleDeleteRow when Delete button is clicked", () => {
    const data = [
      {
        id: 1,
        title: "Test Task 1",
        assigned: "User 1",
        status: "Pending",
        priority: "High",
        startDate: "2025-01-01",
        endDate: "2025-01-02",
      },
    ];
    const { getByText } = render(
      <TableBodyComponent
        data={data}
        handleEditOpen={mockHandleEditOpen}
        handleDeleteRow={mockHandleDeleteRow}
      />
    );

    fireEvent.click(getByText("Delete"));

    expect(mockHandleDeleteRow).toHaveBeenCalledTimes(1);
    expect(mockHandleDeleteRow).toHaveBeenCalledWith(data[0].id);
  });

  it("renders two sets of Edit and Delete buttons", () => {
    const { getAllByText } = render(
      <TableBodyComponent
        data={data}
        handleEditOpen={mockHandleEditOpen}
        handleDeleteRow={mockHandleDeleteRow}
      />
    );

    expect(getAllByText("Edit").length).toBe(2);
    expect(getAllByText("Delete").length).toBe(2);
  });
});
