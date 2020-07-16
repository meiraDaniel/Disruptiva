import React, { useState } from "react";
import logo from "../../Images/logo_color.png";
import "./Navegation.scss";
import { Grid } from "@material-ui/core";

export default function Navegation() {
  const [flag, set] = useState(false);

  return (
    <Grid container alignItems="center" style={{ height:"100%"}}>
      <Grid item xs={2} sm={1} style={{ height:"100%"}}>
        <img className="logo" src={logo} alt="disruptiva" />
      </Grid>
      <Grid item xs={8} sm={10} style={{height:"100%"}}>
        <ul className={!flag ? "display_none" : "navegation"}>
          <a onClick={() => set(false)} href="#quemsomos">
            Quem somos
          </a>
          <a onClick={() => set(false)} href="#quemescreve">
            Quem escreve
          </a>
          <a onClick={() => set(false)} href="#portfolio">
            Portfólio
          </a>
        </ul>
      </Grid>

      <Grid
        item
        xs={2}
        sm={1}
        style={{height:"100%"}}
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
