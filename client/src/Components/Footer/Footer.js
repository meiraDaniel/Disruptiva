import React from "react";

import logo from "../../Images/logo_branco.png";
import "./Footer.scss";
import { Grid, Typography } from "@material-ui/core";
import { social } from "../../Helpers/socialMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root:{
    color:"white",
    wordBreadk:"break"
  }
});
export default function Footer() {
      const classes = useStyles();

  return (
    <Grid container spacing={1} >
      <Grid container style={{padding:'2%', background:"purple"}}>
        <Grid item xs={7}>
          <Typography variant="h5" color="primary">Endereço</Typography>
          <Typography  className={classes.root}  variant="body2">Rua Peçanha, 161,</Typography>
          <Typography className={classes.root}  variant="body2">Bloco 11 Sala 202</Typography>
          <Typography className={classes.root}  variant="body2">Carlos Prates</Typography>
          <Typography className={classes.root}  variant="body2">Belo Horizonte</Typography>
          <Typography className={classes.root}  variant="body2">Minas Gerais</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h5" color="primary">Contato</Typography>
          <Typography className={classes.root}  variant="body2">
            audiovisualdisruptiva@gmail.com
          </Typography>
          <Typography className={classes.root}  variant="body2">31 997139306</Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={logo} alt="logo" className="logo"/>
        </Grid>
      </Grid>
      <Grid container  style={{height:"20%",background:"red", width:'100%'}}>
        {social.map(({ href, name, src }) => (
          <Grid item xs={2}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={src} alt={name}  />
            </a>
          </Grid>
        ))}

        <Typography className={classes.root}  variant="body2" id="copyrights"> Copyright &#xA9; 2020 Lidas </Typography>
      </Grid>
    </Grid>
  );
}
