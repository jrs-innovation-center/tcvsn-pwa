import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

const DenyDeleteDialog = props => {
  return (
    <Dialog
      open={props.currentCategory.denyDelete}
      onRequestClose={props.toggleDenyDelete}
    >
      <DialogTitle>{'Denied'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.currentCategory.denyDeleteMsg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.toggleDenyDelete} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DenyDeleteDialog
