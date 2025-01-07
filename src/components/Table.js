import React, { useEffect, useState } from "react";
import { Table, TableContainer, Button, Select, MenuItem } from "@mui/material";
import TableHeader from "./TableHeader";
import { fetchData } from "../redux/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import useSort from "../hooks/useSort";
import TableBodyComponent from "./TableBodyComponent";
import { TextField } from "@mui/material";
import { setData } from "../redux/tableSlice";
import CustomDialog from "./CustomDialog";

const MyTable = () => {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState("local");
  const { data, sortConfig } = useSelector((state) => state.table);
  const [editRow, setEditRow] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  useEffect(() => {
    dispatch(fetchData(dataSource));
  }, [dataSource, dispatch]);
  const { handleSort } = useSort(data, sortConfig);

  const handleEditOpen = (row) => {
    setEditRow(row);
    setEditedData({ ...row });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditSave = () => {
    const updatedData = data.map((row) =>
      row.id === editRow.id ? { ...row, ...editedData } : row
    );
    dispatch(setData(updatedData));
    setEditRow(null);
  };

  const deleteRowHandler = (id) => {
    const updatedData = data?.filter((row) => row?.id !== id);
    dispatch(setData(updatedData));
    setDeleteModalOpen(false);
  };

  const openDeleteModal = (row) => {
    setRowToDelete(row);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setRowToDelete(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Table</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>Data Source: </label>
        <Select
          value={dataSource}
          onChange={(e) => setDataSource(e.target.value)}
        >
          <MenuItem value="local">Local</MenuItem>
          <MenuItem value="api">API</MenuItem>
        </Select>
      </div>
      <TableContainer>
        <Table>
          <TableHeader sortConfig={sortConfig} handleSort={handleSort} />
          <TableBodyComponent
            data={data}
            handleEditOpen={handleEditOpen}
            handleDeleteRow={openDeleteModal}
          />
        </Table>
      </TableContainer>
      <CustomDialog
        open={Boolean(editRow)}
        onClose={() => setEditRow(null)}
        title="Edit Task"
        onCancel={() => setEditRow(null)}
        onConfirm={handleEditSave}
        confirmLabel="Save"
      >
        <TextField
          label="Title"
          name="title"
          value={editedData.title || ""}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Assigned"
          name="assigned"
          value={editedData.assigned || ""}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Status"
          name="status"
          value={editedData.status || ""}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Priority"
          name="priority"
          value={editedData.priority || ""}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Start Date"
          name="startDate"
          type="date"
          value={editedData.startDate || ""}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          name="endDate"
          type="date"
          value={editedData.endDate || ""}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </CustomDialog>
      <CustomDialog
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        title="Are you sure you want to delete this task?"
        onCancel={closeDeleteModal}
        onConfirm={() => deleteRowHandler(rowToDelete)}
        confirmLabel="OK"
        cancelLabel="Cancel"
      >
        <p>Are you sure you want to delete this task?</p>
      </CustomDialog>
    </div>
  );
};

export default MyTable;
