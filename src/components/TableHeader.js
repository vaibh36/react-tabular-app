import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import SortableHeader from "./SortableHeader";
import PropTypes from "prop-types";
const TableHeader = ({ sortConfig, handleSort }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <SortableHeader
            label="Title"
            active={sortConfig.key === "title"}
            direction={
              sortConfig.key === "title" ? sortConfig.direction : "asc"
            }
            onSort={() => handleSort("title")}
          />
        </TableCell>
        <TableCell>
          <SortableHeader
            label="Assigned"
            active={sortConfig.key === "assigned"}
            direction={
              sortConfig.key === "assigned" ? sortConfig.direction : "asc"
            }
            onSort={() => handleSort("assigned")}
          />
        </TableCell>
        <TableCell>
          <SortableHeader
            label="Status"
            active={sortConfig.key === "status"}
            direction={
              sortConfig.key === "status" ? sortConfig.direction : "asc"
            }
            onSort={() => handleSort("status")}
          />
        </TableCell>
        <TableCell>
          <SortableHeader
            label="Priority"
            active={sortConfig.key === "priority"}
            direction={
              sortConfig.key === "priority" ? sortConfig.direction : "asc"
            }
            onSort={() => handleSort("priority")}
          />
        </TableCell>
        <TableCell>Start Date</TableCell>
        <TableCell>End Date</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  sortConfig: PropTypes.shape({
    key: PropTypes.string,
    direction: PropTypes.oneOf(["asc", "desc"]),
  }),
  handleSort: PropTypes.func,
};

export default TableHeader;
