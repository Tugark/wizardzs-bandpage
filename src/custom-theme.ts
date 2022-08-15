import { alpha, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    text: {
      primary: '#FFFFFF',
    },
    background: {
      paper: alpha('#424242', 0.8),
    },
  },
})

export default theme