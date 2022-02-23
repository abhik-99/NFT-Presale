/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  ThemeProvider,
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
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.01)), url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `}>
      <Container sx={{height: '100%' ,display: 'flex', justifyContent: 'center', alignItems: "center"}}>
        <PresaleCard/>
        <Footer />
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
