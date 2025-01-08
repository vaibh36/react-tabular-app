import { renderHook, act } from "@testing-library/react-hooks";
import { useDispatch } from "react-redux";
import { setData, setSortConfig } from "../redux/tableSlice"; // Adjust path as needed
import useSort from "../hooks/useSort"; // Adjust path as needed

// Mock the Redux dispatch function
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("useSort hook", () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn(); // Mock dispatch function
    useDispatch.mockReturnValue(dispatch);
  });

  it("should dispatch setSortConfig and setData with correct arguments when handleSort is called", () => {
    const data = [
      { id: 1, title: "Task 1", priority: "Low" },
      { id: 2, title: "Task 2", priority: "High" },
    ];
    const sortConfig = { key: "title", direction: "asc" };

    const { result } = renderHook(() => useSort(data, sortConfig));

    // Call handleSort with "priority" key
    act(() => {
      result.current.handleSort("priority");
    });

    // Check if dispatch was called with setSortConfig action
    expect(dispatch).toHaveBeenCalledWith(
      setSortConfig({ key: "priority", direction: "desc" })
    );

    // Check if dispatch was called with setData action
    const sortedData = [
      { id: 2, title: "Task 2", priority: "High" },
      { id: 1, title: "Task 1", priority: "Low" },
    ];
    expect(dispatch).toHaveBeenCalledWith(setData(sortedData));
  });

  it("should toggle direction when the same key is sorted again", () => {
    const data = [
      { id: 1, title: "Task 1", priority: "Low" },
      { id: 2, title: "Task 2", priority: "High" },
    ];
    const sortConfig = { key: "title", direction: "asc" };

    const { result } = renderHook(() => useSort(data, sortConfig));

    // Call handleSort with the same key ("title") again
    act(() => {
      result.current.handleSort("title");
    });

    // Check if dispatch was called with setSortConfig action with updated direction
    expect(dispatch).toHaveBeenCalledWith(
      setSortConfig({ key: "title", direction: "desc" })
    );

    // Check if dispatch was called with setData action with sorted data
    const sortedData = [
      { id: 2, title: "Task 2", priority: "High" },
      { id: 1, title: "Task 1", priority: "Low" },
    ];
    expect(dispatch).toHaveBeenCalledWith(setData(sortedData));
  });

  it("should sort data based on the key and direction provided", () => {
    const data = [
      { id: 1, title: "Task 1", priority: "Low" },
      { id: 2, title: "Task 2", priority: "High" },
    ];
    const sortConfig = { key: "priority", direction: "asc" };

    const { result } = renderHook(() => useSort(data, sortConfig));

    // Call handleSort with "priority" key
    act(() => {
      result.current.handleSort("priority");
    });

    // Check if dispatch was called with setSortConfig and setData actions
    expect(dispatch).toHaveBeenCalledWith(
      setSortConfig({ key: "priority", direction: "desc" })
    );

    const sortedData = [
      { id: 2, title: "Task 2", priority: "High" },
      { id: 1, title: "Task 1", priority: "Low" },
    ];
    expect(dispatch).toHaveBeenCalledWith(setData(sortedData));
  });
});
