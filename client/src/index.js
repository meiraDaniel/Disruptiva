import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./global.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
        fontSize: "1.5rem",
      },
      "@media (min-width:901px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      fontWeight: "700",
      fontSize: "1.6rem",
      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "1.6rem",
      },
      "@media (min-width:901px)": {
        fontSize: "1.8rem",
      },
    },
    body2: {
      fontSize: "0.7rem",
      "@media (min-width:600px) and (orientation:landscape) and (max-width:900px)": {
        fontSize: "0.7rem",
      },
      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:901px)": {
        fontSize: "1.1rem",
      },
    },
    h5: {
      fontSize: "1rem",
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
      fontSize: "0.8rem",
      "@media (min-width:600px) and (max-width:900px) and (orientation:portrait)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:600px) and (max-width:900px) and (orientation:landscape)": {
        fontSize: "1rem",
      },
  },
}})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
