import React from "react";
import "./Presentation.scss";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
borderTitle:{
  borderLeft:'3px solid #cf1552',
  paddingLeft:'3%'

}
});
export default function Presentation({ title, text, photo, id }) {
    const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      style={{ height: "100%"}}
    >
      <Grid item xs={11} sm={5} lg={5}   className="text-presentation">
        <Grid
          item
          xs={12}
          sm={12}
          className="title-presentation"
        >
          <Typography variant="h4" color='primary' className={classes.borderTitle}>{title}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={11}
          className="subtitle-presentation"
         
        >
          <Typography variant="body2">{text}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={10} sm={6} lg={4} className="image-presentation">
        <img src={photo} alt="team" />
      </Grid>
    </Grid>
  );
}
