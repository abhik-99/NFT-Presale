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
import MetamaskPromptDialog from './MetamaskPromptDialog';
import AvaxSwitchDialog from './AvaxSwitchDialog';
import { ethers } from 'ethers';

const PresaleCard = ({contract}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(PRESALE_DETAILS[0]);
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [metamaskPrompt, setMetamaskPrompt] = useState(false);
  const [avaxSwitchPrompt, setAvaxSwitchPrompt] = useState(false);
  const [loggedInAccount, setLoggedInAccount] = useState(undefined);

  const handleCardSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleBuyClick = (e) => {
    console.log("Selected Card", selected);
  }
  const handleLogIn = async () => {
    if(!window.ethereum) {
      setMetamaskPrompt(true);
    } else if(!['43114', '43113'].includes(window.ethereum.networkVersion)) {
      setAvaxSwitchPrompt(true);
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setLoggedInAccount(await signer.getAddress());
      setInterval(() => setLoggedIn(true), 2000);

    }

  }
  return (
    <>
    <Fade in={true} timeout={1500}>
      <Card sx={{ borderRadius: theme.shape.borderRadius + 10, mx:{ sm: 10}}}>
        <CardContent sx={{ px: {xs: 5}, position: 'relative'}}>
          <Fade in={!loggedIn} timeout={1000}>
            <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(4px)',
              padding: '10px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {
              !loggedInAccount &&
              <Button variant="contained" color="secondary" onClick={handleLogIn} sx={{boxShadow: `0px 0px 15px 10px ${theme.palette.secondary.dark}`}}>Connect</Button>
            }
            {
              loggedInAccount &&
              <Fade in={loggedInAccount? true: false} timeout={1000}>
                <Typography noWrap sx={{pr:1}}>Connected to {loggedInAccount}</Typography>
              </Fade>
            }

          </Box>
        </Fade>
        <Stack>
          <ButtonBase sx={{ p: 1, borderRadius: theme.shape.borderRadius}}>
            <img src={selected.image} alt={selected.name} height={useMediaQuery(theme.breakpoints.up('sm')) ? theme.spacing(20) : theme.spacing(10)}/>
          </ButtonBase>
          <ButtonBase sx={{ p: 1, borderRadius: theme.shape.borderRadius, mb: 2}}
          onClick={() => setCardDetailsOpen(true)}>
            <Typography>
              Get Card Details
            </Typography>
          </ButtonBase>
          <form onSubmit={handleBuyClick}>
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
            <Button type="submit" variant="contained" fullWidth sx={{ my: 2}}>Buy</Button>
          </form>
        </Stack>
        </CardContent>
      </Card>
    </Fade>
    <CardDetailsDialog open={cardDetailsOpen} onClose={() => setCardDetailsOpen(false)} card={selected}/>
    <MetamaskPromptDialog open={metamaskPrompt} onClose={() => setMetamaskPrompt(false)}/>
    <AvaxSwitchDialog open={avaxSwitchPrompt} onClose={() => setAvaxSwitchPrompt(false)} />
    </>
  )
}

export default PresaleCard