import { createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: {
            light: '#ffffff',
            main: '#2e2e2b',
            dark: '#ffff00',
            contrastText: '#0000ff',
            backgroundColor: '#fff'
        },
        tertiary: {
            light: '#63a4ff',
            main: '#1976d2',
            dark: '#004ba0',
            contrastText: '#ffffff',
        },
    },
})