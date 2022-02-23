/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  ThemeProvider,
  Typography,
  Paper,
  Grid,
  Fade,
  useMediaQuery
} from "@mui/material";
import background from "./assets/images/landingBg.png";
import { theme } from "./assets/jss/theme";
import Footer from "./ui/Footer";
import PresaleCard from "./ui/PresaleCard";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div css={css`
    height: 100vh;
    background-image: url(${background});
    background-image: radial-gradient(circle at center, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)), url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `}>
      <Container sx={{height: '100%' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <Fade in={true} timeout={1000}>
          <Paper sx={{background: 'none',display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: theme.spacing(10)}} elevation={0}>
            <img src={logo} alt="Jack of All Trades Logo" height={useMediaQuery(theme.breakpoints.down('sm')) ? theme.spacing(20) : theme.spacing(25)} sx={{display: {sm: 'none'}}}/>
            <Typography variant="h1"><span style={{color: theme.palette.primary.main}}>Jack</span>-of-All-<span style={{color: theme.palette.secondary.main}}>Trades</span></Typography>
          </Paper>
        </Fade>

        <Grid container spacing={2} justifyContent="space-between" sx={{mt: 10}}>
          {/* <Grid item xs={12} align="center">
            <Fade in={true} timeout={1000}>
              <Paper sx={{background: 'none', mb: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: theme.spacing(10)}} elevation={0}>
                <img src={logo} alt="Jack of All Trades Logo" height={theme.spacing(25)}/>
                <Typography variant="h1"><span style={{color: theme.palette.primary.main}}>Jack</span>-of-All-<span style={{color: theme.palette.secondary.main}}>Trades</span></Typography>
              </Paper>
            </Fade>
          </Grid> */}
          <Grid item xs={12} md={5} align="center">
            <Fade in={true} timeout={1200}>
              <Paper sx={{background: 'none'}} elevation={0}>
                <Typography variant="h2">Welcome to <span style={{color: theme.palette.primary.dark}}>Presale</span>!</Typography>
              </Paper>
            </Fade>
          </Grid>

          <Grid item xs={12} md={6} align="center">
            <PresaleCard/>
          </Grid>

        </Grid>
        <Footer />
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
