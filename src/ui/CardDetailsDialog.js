import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography, Box, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CardDetailsDialog = ({open, onClose, card}) => {
  const theme = useTheme();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        Card Information
      </DialogTitle>
      <DialogContent sx={{px: {sm: 10}}}>
        <Box textAlign="center" mb={2}>
          <img src={card.image} alt={card.name} height={useMediaQuery(theme.breakpoints.up('sm')) ? theme.spacing(25) : theme.spacing(15)}/>
        </Box>
        <Box sx={{my: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Typography>Card Name:</Typography>
          <Typography>{card.name}</Typography>
        </Box>
        <Divider />
        <Box sx={{my: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Typography>Price:</Typography>
          <Typography>{`${card.price} AVAX`}</Typography>
        </Box>
        <Divider />
        <Box sx={{my: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Typography>Presale Limit:</Typography>
          <Typography>{card.limit} Cards</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CardDetailsDialog