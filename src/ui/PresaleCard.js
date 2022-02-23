import React from 'react';
import {
  Card,
  CardContent,
  Fade,
  Typography
} from '@mui/material';
import { useTheme } from '@emotion/react';
const PresaleCard = () => {
  const theme = useTheme()
  return (
    <Fade in={true} timeout={500}>
      <Card sx={{ height: 400, width: 800, borderRadius: theme.shape.borderRadius + 10}}>
        <CardContent>
          <Typography>Sale Details here</Typography>
        </CardContent>

      </Card>
    </Fade>
  )
}

export default PresaleCard