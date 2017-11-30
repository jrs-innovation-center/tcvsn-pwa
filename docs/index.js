import React from 'react'
import { render } from 'react-dom'

import 'typeface-roboto'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { green, purple } from 'material-ui/colors'

import App from './app'

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
)
