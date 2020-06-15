import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Ubuntu, Arial',
  },
  palette: {
    primary: {
      main: '#0F6CB2',
    },
    secondary: {
      main: '#FEBC2C',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

theme.typography.h3 = {
  fontSize: '1.7rem',
  fontWeight: 700,

  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}
theme.typography.h1 = {
  fontSize: '1.9rem',
  fontWeight: 700,

  [theme.breakpoints.up('md')]: {
    fontSize: '7rem',
  },
}
theme.typography.h5 = {
  fontSize: '1.6rem',
  fontWeight: 700,

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}

export default theme
