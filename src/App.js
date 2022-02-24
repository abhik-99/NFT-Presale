/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  ThemeProvider,
  Typography,
  Paper,
  Grid,
  Fade,
  useMediaQuery,
  Box,
  ButtonBase
} from "@mui/material";
import background from "./assets/images/landingBg.png";
import { theme } from "./assets/jss/theme";
import PresaleCard from "./ui/PresaleCard";
import Header from "./ui/Header";
import logo from "./assets/images/logo.png";
import joat_cards from "./assets/images/JOAT_Images_SVG.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div css={css`
    height: 100vh;
    background-image: url(${background});
    background-image: radial-gradient( rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1)), url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto
    `}>
      <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ flexGrow: 1, pt: 10}}>
          <Fade in={true} timeout={1000}>
            <Paper sx={{background: 'none',display: 'flex', alignItems: 'center', justifyContent: 'center'}} elevation={0}>
              <img src={logo} alt="Jack of All Trades Logo" height={useMediaQuery(theme.breakpoints.down('sm')) ? theme.spacing(20) : theme.spacing(25)} sx={{display: {sm: 'none'}}}/>
              <Typography variant="h1"><span style={{color: theme.palette.primary.main}}>Jack</span>-of-All-<span style={{color: theme.palette.secondary.main}}>Trades</span></Typography>
            </Paper>
          </Fade>
        </Box>
        <Box>
          <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{mt: 2}}>
            <Grid item xs={12} md={5} align="center">
              <Fade in={true} timeout={1200}>
                <Paper sx={{background: 'none'}} elevation={0}>
                  <Typography variant="h2">Welcome to the <span style={{color: theme.palette.primary.dark}}>Presale</span>!</Typography>
                </Paper>
              </Fade>
            </Grid>

            <Grid item xs={12} md={6} align="center">
              <PresaleCard/>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <ButtonBase sx={{borderRadius: '50%'}}>
            <img src={joat_cards} alt="Cards" height={theme.spacing(30)}/>
          </ButtonBase>
        </Box>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
