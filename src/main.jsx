import React from 'react'
import ReactDOM from 'react-dom/client'
import { MealDetails } from './pages/MealDetails'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <MealDetails />
    </ThemeProvider>
  </React.StrictMode>
)
