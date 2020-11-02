import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./global.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter
} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff577e",
      main: "#cf1552",
      dark: "#97002a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffad7a",
      main: "#e37d4d",
      dark: "#ac4f22",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Futura_Md", "Futura_Bold"],
    h1: {
      fontSize: "7rem",
    },

    h3: {
      fontWeight: "700",
      fontSize: "1.2rem",
      "@media (min-width:600px) and (max-width:900px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:901px)": {
        fontSize: "1.8rem",
      },
    },
    body1: {
      color: "white",
      fontSize: "1rem",
      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:901px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      fontWeight: "700",
      fontSize: "1.6rem",
      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:901px)": {
        fontSize: "2.3rem",
      },
    },
    body2: {
      fontSize: ".85rem",

      "@media (min-width:600px) and (orientation:landscape) and (max-width:900px) and (min-height:600px)": {
        fontSize: "0.7rem",
      },

      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "1.5rem",

      },
      "@media (min-width:901px) and (max-width:1030px)": {
        fontSize: "1.5rem",


      },
      "@media (min-width:1031px)": {
        fontSize: "1.7rem",
      },
    },
    h5: {
      fontSize: "0.5rem",
      fontWeight: "700",
      "@media (min-width:600px) and (max-width:900px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width:901px)": {
        fontSize: "2rem",
      },
    },
    subtitle1: {
      color: "white",
      fontSize: "0.7rem",
      "@media (min-width:600px) and (max-width:900px) and (orientation:portrait)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:600px) and (max-width:900px) and (orientation:landscape)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
    },
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
