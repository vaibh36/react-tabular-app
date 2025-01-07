import { createSlice } from "@reduxjs/toolkit";
import { localData, todoURL } from "../utils/data";

const initialState = {
  data: [],
  sortConfig: {
    key: "title",
    direction: "asc",
  },
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSortConfig: (state, action) => {
      state.sortConfig = action.payload;
    },
  },
});

export const { setData, setSortConfig } = tableSlice.actions;

export const fetchData = (dataSource) => async (dispatch) => {
  if (dataSource === "local") {
    dispatch(setData(localData));
  } else if (dataSource === "api") {
    try {
      const response = await fetch(todoURL);
      const json = await response.json();
      const apiData = json?.slice(0, 5)?.map((item) => ({
        id: item.id,
        title: item.title,
        assigned: "API User",
        status: "Pending",
        priority: "Medium",
        startDate: "2025-01-03",
        endDate: "2025-01-09",
      }));
      dispatch(setData(apiData));
    } catch (err) {
      dispatch(setData(localData));
    }
  }
};

export default tableSlice.reducer;
