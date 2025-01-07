import React from "react";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import PropTypes from "prop-types";

const TableBodyComponent = ({ data, handleEditOpen, handleDeleteRow }) => {
  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.assigned}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.priority}</TableCell>
          <TableCell>{row.startDate}</TableCell>
          <TableCell>{row.endDate}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleEditOpen(row)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              style={{ marginLeft: "10px" }}
              onClick={() => handleDeleteRow(row.id)}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

TableBodyComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      assigned: PropTypes.string,
      status: PropTypes.string,
      priority: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
  handleEditOpen: PropTypes.func,
  handleDeleteRow: PropTypes.func,
};

export default TableBodyComponent;
