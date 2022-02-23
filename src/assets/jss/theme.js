import { createTheme } from "@mui/material/styles";
import { purple, red } from "@mui/material/colors";
import { responsiveFontSizes } from "@mui/material";


export const theme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
    primary: red,
    secondary: purple,
  }
}));