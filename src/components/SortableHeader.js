import { TableSortLabel } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const SortableHeader = ({ label, active, direction, onSort }) => {
  return (
    <TableSortLabel active={active} direction={direction} onClick={onSort}>
      {label}
    </TableSortLabel>
  );
};

SortableHeader.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  direction: PropTypes.oneOf(["asc", "desc"]),
  onSort: PropTypes.func,
};

export default SortableHeader;
