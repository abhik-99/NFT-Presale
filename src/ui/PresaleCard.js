import React, {useState} from 'react';
import {
  Card,
  CardContent,
  Grid,
  Button,
  ButtonBase,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  useMediaQuery,
  Fade,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { PRESALE_DETAILS } from '../assets/statics/presale';
import CardDetailsDialog from './CardDetailsDialog';

const PresaleCard = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(PRESALE_DETAILS[0]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);

  const handleCardSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleBuyClick = () => {
    console.log("Selected Card", selected);
  }
  return (
    <>
    <Fade in={true} timeout={1500}>
      <Card sx={{ borderRadius: theme.shape.borderRadius + 10, mx:{ sm: 10}}}>
        <CardContent sx={{ px: {xs: 5}}}>
          <Stack>
              <ButtonBase sx={{ p: 1, borderRadius: theme.shape.borderRadius}}>
                <img src={selected.image} alt={selected.name} height={useMediaQuery(theme.breakpoints.up('sm')) ? theme.spacing(20) : theme.spacing(10)}/>
              </ButtonBase>
              <ButtonBase sx={{ p: 1, borderRadius: theme.shape.borderRadius}}
              onClick={() => setCardDetailsOpen(true)}>
                <Typography>
                  Get Card Details
                </Typography>
              </ButtonBase>

                <FormControl fullWidth>
                  <InputLabel id="select-label" color="secondary">Card</InputLabel>
                  <Select
                    labelId="select-label"
                    id="card-select"
                    label="Card"
                    color="secondary"
                    value={selected}
                    onChange={handleCardSelect}
                  >
                    {
                      PRESALE_DETAILS.map((item, index) =>
                      <MenuItem value={item} key={"NFTCardSelect"+index}>{item.name}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
                <Button onClick={handleBuyClick} variant="contained" fullWidth sx={{ mr:1 }}>Buy</Button>


          </Stack>


        </CardContent>
      </Card>
    </Fade>
    <CardDetailsDialog open={cardDetailsOpen} onClose={() => setCardDetailsOpen(false)} card={selected}/>
    </>
  )
}

export default PresaleCard