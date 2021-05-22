import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffba60',
    },
    secondary: {
      main: '#ffba60',
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: "$labelcolor"
        }
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#ffba60',
      }
    }
  },
})