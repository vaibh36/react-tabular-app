import { setData, setSortConfig, fetchData } from "../redux/tableSlice";
import store from "../redux/store";
import { localData } from "../utils/data";
global.fetch = jest.fn();

describe("Table slice", () => {
  it("should handle setData reducer", () => {
    const newData = [
      {
        id: 3,
        title: "New Task",
        assigned: "Charlie",
        status: "In Progress",
        priority: "Low",
        startDate: "2025-02-01",
        endDate: "2025-02-07",
      },
    ];
    store.dispatch(setData(newData));
    const state = store.getState().table.data;
    expect(state).toEqual(newData);
  });

  it("should toggle a record", () => {
    const newData = [
      {
        id: 3,
        title: "New Task",
        assigned: "Charlie",
        status: "In Progress",
        priority: "Low",
        startDate: "2025-02-01",
        endDate: "2025-02-07",
      },
    ];

    store.dispatch(setSortConfig(newData));
  });
  it("should fetch data from API and set it in the store when dataSource is 'api'", async () => {
    const mockApiResponse = [
      { id: 1, title: "API Task 1" },
      { id: 2, title: "API Task 2" },
    ];
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    await store.dispatch(fetchData("api"));

    expect(store.getState().table.data).toEqual([
      {
        id: 1,
        title: "API Task 1",
        assigned: "API User",
        status: "Pending",
        priority: "Medium",
        startDate: "2025-01-03",
        endDate: "2025-01-09",
      },
      {
        id: 2,
        title: "API Task 2",
        assigned: "API User",
        status: "Pending",
        priority: "Medium",
        startDate: "2025-01-03",
        endDate: "2025-01-09",
      },
    ]);
  });
  it("should fetch data from local when dataSource is 'local'", async () => {
    await store.dispatch(fetchData("local"));
    expect(store.getState().table.data).toEqual(localData);
  });
});
