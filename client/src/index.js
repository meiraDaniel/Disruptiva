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
      fontSize: "1.2rem",
      "@media (min-width:600px) and (max-width:900px)": {
        fontSize: "1.8rem",
        color: "white",
      },
      "@media (min-width:901px)": {
        fontSize: "1.8rem",
        color: "white",
      },
    },
    body1: {
      fontSize: "1.3rem",
      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "1.5rem",
        color: "blue",
      },
      "@media (min-width:901px)": {
        fontSize: "2.3rem",
        color: "white",
      },
    },
    h4: {
      fontSize: "1.6rem",
      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "1.5rem",
        color: "blue",
      },
      "@media (min-width:901px)": {
        fontSize: "2.3rem",
        color: "white",
      },
    },
    body2: {
      fontSize: "0.8rem",

      "@media (min-width:600px) and (orientation:portrait) and (max-width:900px)": {
        fontSize: "1.5rem",
        color: "blue",
      },
      "@media (min-width:901px)": {
        fontSize: "1.5rem",
        color: "white",
      },
    },
  },
});

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
