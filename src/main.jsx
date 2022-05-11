import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ThemeProvider} from "styled-components";

const darkTheme = {
  textColor: "#eee",
  backgroundColor: "#111",
};

const whiteTheme = {
  textColor: "#111",
  backgroundColor: "#eee",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
