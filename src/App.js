/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  ThemeProvider,
  Typography,
  Paper,
  Grid
} from "@mui/material";
import background from "./assets/images/landingBg.png";
import { theme } from "./assets/jss/theme";
import Footer from "./ui/Footer";
import PresaleCard from "./ui/PresaleCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div css={css`
    height: 100vh;
    background-image: url(${background});
    background-image: radial-gradient(circle at center, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01)), url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `}>
      <Container sx={{height: '100%' ,display: 'flex', justifyContent: 'center', alignItems: "center"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Paper sx={{background: 'none'}} >
              <Typography variant="h2">Jack-of-All-Trades</Typography>
              <Typography variant="h3">Welcome to Presale</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} align="center">

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
