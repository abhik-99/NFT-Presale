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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { PRESALE_DETAILS } from '../assets/statics/presale';
import CardDetailsDialog from './CardDetailsDialog';

const PresaleCard = () => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(undefined);
  const [selected, setSelected] = useState(PRESALE_DETAILS[0]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);

  const handleQuantityChange = (e) => {
    if(!isNaN(e.target.value) && e.target.value < 1) {
      setError(true);
      setErrorMessage('The quantity needs to be Integer and more than 0!');
    } else {
      setQuantity(e.target.value);
    }
    if(error) setError(false);
  }
  const handleCardSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleBuyClick = () => {
    if(isNaN(quantity)) {
      setError(true);
      setErrorMessage("This cannot be empty!");
    } else {

    console.log("Selected Card", selected);
    console.log("Selected Card Quantity", quantity);
    }
  }
  return (
    <>
    <Fade in={true} timeout={1500}>
      <Card sx={{ width: "100%", borderRadius: theme.shape.borderRadius + 10}}>
        <CardContent sx={{width: "90%", display: 'flex', alignItems: 'center'}}>
          <Grid container justifyContent="space-evenly" >
            <Grid item xs={12} md={4} align="center">
              <Box>
              <ButtonBase sx={{ p: 1, borderRadius: theme.shape.borderRadius}}>
                <img src={selected.image} alt={selected.name} height={useMediaQuery(theme.breakpoints.up('sm')) ? theme.spacing(20) : theme.spacing(10)}/>
              </ButtonBase>
              </Box>
              <ButtonBase sx={{ p: 1, borderRadius: theme.shape.borderRadius}}
              onClick={() => setCardDetailsOpen(true)}>
                <Typography>
                  Get Card Details
                </Typography>
              </ButtonBase>

            </Grid>
            <Grid item container xs={12} sm={8} md={6}
            direction="row"
            justifyContent="center"
            alignItems="center"

            >

              <Grid container item xs={12} justifyContent="space-between" sx={{ my: 2}}>
                <Grid item xs={7}>
                  <TextField label="Enter Quantity" type="number" fullWidth color='secondary' onChange={handleQuantityChange} required/>
                  {
                    error &&
                    <Typography color="error">{errorMessage}</Typography>
                  }
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button onClick={handleBuyClick} variant="contained" fullWidth sx={{ mr:1 }}>Buy</Button>
              </Grid>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fade>
    <CardDetailsDialog open={cardDetailsOpen} onClose={() => setCardDetailsOpen(false)} card={selected}/>
    </>
  )
}

export default PresaleCard