import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

import logo from "../../Images/logo_color.png";
import "./Navegation.scss";

export default function Navegation() {
  const [flag, set] = useState(false);

  return (
    <Grid container alignItems="center" style={{ height: "100%" }}>
      <Grid item xs={2} sm={1} style={{ cursor: "pointer" }}>
        <Link to="/">
          <img className="logo" src={logo} alt="disruptiva" />
        </Link>

      </Grid>
      <Grid item xs={8} sm={10} style={{ height: "100%" }}>
        <ul className={!flag ? "display_none" : "navegation"}>
          <a onClick={() => set(false)} href="#quemsomos">
            Quem somos
          </a>
          <a onClick={() => set(false)} href="#quemescreve">
            Quem faz
          </a>
          <a onClick={() => set(false)} href="#portfolio">
            Portfólio
          </a>
          <Link to="/blog">
            Blog
          </Link>
        </ul>
      </Grid>

      <Grid
        item
        xs={2}
        sm={1}
        md={false}
        style={{ height: "100%" }}
        onClick={() => set(!flag)}
        className={!flag ? "hamburguer--menu" : "hamburguer--menu-close"}
      >
        <span></span>
        <span></span>
        <span></span>
      </Grid>
    </Grid>
  );
}
