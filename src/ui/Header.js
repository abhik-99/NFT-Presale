import React from 'react'
import {
  Slide,
  Paper,
  IconButton,
  AppBar,
  Toolbar
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SOCIALS } from '../assets/statics/socials';


const Header = () => {
  const theme = useTheme();
  return (
    <>
    <AppBar position="static" color="primary" sx={{ background: 'none'}} elevation={0}>
      <Toolbar sx={{display: 'flex',justifyContent:"center"}}>
      <Slide in={true} timeout={2000} direction="down">
          <Paper sx={{ width: {xs: '80%', md:'50%', lg: '30%'}, pb: 4, pt: 2, px: 2, borderRadius: '0 0 100% 100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', background: theme.palette.common.black}}>
            {
              SOCIALS.map((item, index) =>
              <IconButton
              aria-label={item.name+'icon'}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={"header-icon"+index}
              >
                {item.icon}
              </IconButton>
              )
            }

          </Paper>
      </Slide>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header