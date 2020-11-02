import React from "react";
import "./Presentation.scss";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  borderTitle: {
    borderLeft: '3px solid #cf1552',
    paddingLeft: '3%'

  }
});
export default function Presentation({ title, text, photo, id }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={10} sm={10} md={5} lg={5} className="image-presentation">
        <img src={photo} alt="team" />
      </Grid>
      <Grid item xs={10} sm={10} md={5} lg={5} className="text-presentation">

        <Typography variant="h4" color='primary' className={classes.borderTitle}>{title}</Typography>

        <Typography variant="body2">{text}</Typography>

      </Grid>

    </Grid>
  );
}
