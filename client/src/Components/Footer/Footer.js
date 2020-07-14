import React from "react";

import logo from "../../Images/logo_preto.svg";
import "./Footer.scss";
import { Grid, Typography } from "@material-ui/core";
import { social } from "../../Helpers/socialMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
    wordBreadk: "break",
  },
});
export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} style={{padding:"2%", height:"100%" }}>
      <Grid item xs={12} style={{height:"50%"  , display:"flex"}}>
      <Grid item xs={7} sm={4}  style={{height:"100%"  }} >
        <Typography variant="h5" color="primary">
          Endereço
        </Typography>
        <Typography className={classes.root} variant="body2">
          Rua Peçanha, 161,
        </Typography>
        <Typography className={classes.root} variant="body2">
          Bloco 11 Sala 202
        </Typography>
        <Typography className={classes.root} variant="body2">
          Carlos Prates
        </Typography>
        <Typography className={classes.root} variant="body2">
          Belo Horizonte
        </Typography>
        <Typography className={classes.root} variant="body2">
          Minas Gerais
        </Typography>
      </Grid>
      <Grid item xs={7} sm={4} style={{ margin:"0" }}>
        <Typography variant="h5" color="primary">
          Contato
        </Typography>
        <Typography className={classes.root} variant="body2">
          audiovisualdisruptiva@gmail.com
        </Typography>
        <Typography className={classes.root} variant="body2">
          +31 997139306
        </Typography>
      </Grid>
      <Grid item xs={3}  style={{  margin:"0" ,  display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src={logo} alt="logo" className="logo_footer" />
      </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{height:"15%",display: "flex"}}
      >
        {social.map(({ href, name, src }, i) => (
            <a  key={i} href={href} target="_blank" rel="noopener noreferrer" className="images-footer">
              {" "}
              <img src={src} alt={name}  />
            </a>
        ))}
      </Grid>
      <Grid item xs={12} style={{height:"20%"}} >
        <Typography className={classes.root} variant="body2" id="copyrights">
          {" "}
          Copyright &#xA9; 2020 Lidas{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
