import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const CustomDialog = ({
  open,
  onClose,
  title,
  children,
  onCancel,
  onConfirm,
  confirmLabel = "Save",
  cancelLabel = "Cancel",
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          {cancelLabel}
        </Button>
        <Button onClick={onConfirm} color="primary">
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
};

export default CustomDialog;
