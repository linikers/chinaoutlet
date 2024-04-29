import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { theme } from './assets/Theme/theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
