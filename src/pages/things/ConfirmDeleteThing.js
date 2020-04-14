import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

export default function ConfirmDeleteThing({ open, onClose } ) {
  
  const handleCancel = () => {
    onClose(false);
  };

  const handleDelete = () => {
    onClose(true);
  };
  
  return (
    <>
      <Dialog
	disableBackdropClick
	disableEscapeKeyDown
	maxWidth="xs"
	open={open}
      >
	<DialogTitle>Confirm Delete Thing</DialogTitle>
	<DialogContent>
	<DialogContentText>
	  Are you sure you want to delete the thing? This action
	  cannot be undone.
	</DialogContentText>
	</DialogContent>
	<DialogActions>
	<Button onClick={handleCancel} color="primary">
	  Cancel
	</Button>
	<Button
	  variant="contained"
	  onClick={handleDelete}
	  color="primary"
	>
	  Confirm
	</Button>
	</DialogActions>
      </Dialog>
    </>
  );
}
