import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const colors ={
  blue:'#2196f3',
  yellow:"#ffff00"
}

export const{blue,yellow}=colors

export const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: "100%"
}));

