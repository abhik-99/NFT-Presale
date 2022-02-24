import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const MetamaskPromptDialog = ({open, onClose}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Jack-of-all-Trades</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Metamask is absent. Please install Metamask and reload site to proceed.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClose={onClose}>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default MetamaskPromptDialog