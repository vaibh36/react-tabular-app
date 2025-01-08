import { localData, todoURL } from "../utils/data";

describe("Data Exports", () => {
  it("should export localData with correct structure and values", () => {
    expect(localData).toBeInstanceOf(Array);
    expect(localData).toHaveLength(2);

    const task1 = localData[0];
    expect(task1).toHaveProperty("id", 1);
    expect(task1).toHaveProperty("title", "Task 1");
    expect(task1).toHaveProperty("assigned", "Alice");
    expect(task1).toHaveProperty("status", "In Progress");
    expect(task1).toHaveProperty("priority", "High");
    expect(task1).toHaveProperty("startDate", "2025-01-01");
    expect(task1).toHaveProperty("endDate", "2025-01-07");

    const task2 = localData[1];
    expect(task2).toHaveProperty("id", 2);
    expect(task2).toHaveProperty("title", "Task 2");
    expect(task2).toHaveProperty("assigned", "Bob");
    expect(task2).toHaveProperty("status", "Completed");
    expect(task2).toHaveProperty("priority", "Low");
    expect(task2).toHaveProperty("startDate", "2025-01-02");
    expect(task2).toHaveProperty("endDate", "2025-01-08");
  });

  it("should export todoURL as a string", () => {
    expect(todoURL).toBe("https://jsonplaceholder.typicode.com/todos");
  });
});
