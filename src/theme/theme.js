import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    
    primary: {
      main: '#6344d4',
      primarycolor: '#5234C9',
      light: '#8467f5',
      dark: '#4a32a8',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
});