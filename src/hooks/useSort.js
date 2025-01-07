import { useDispatch } from "react-redux";
import { setData, setSortConfig } from "../redux/tableSlice";

const useSort = (data, sortConfig) => {
  const dispatch = useDispatch();

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";

    dispatch(setSortConfig({ key, direction }));

    const sortedData = [...data]?.sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    dispatch(setData(sortedData));
  };

  return { handleSort };
};

export default useSort;
