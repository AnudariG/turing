import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import InputString from "./InputString";  // component that manupulates the input
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 65,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function TapeBox() {
  return ( 
    <Grid container
    spacing={2}
    justifyContent="center"
    alignItems="center"
    marginTop
    style={{ minWidth: '350vh' }}>
      <div className='tape-head'>Tape</div>
      <Grid item xs={6}>
        <ThemeProvider theme={lightTheme}>
            <Item elevation={3}>
              <InputString />
            </Item>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

