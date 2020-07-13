import React from "react";
import "./Presentation.scss";
import { Grid, Typography } from "@material-ui/core";

export default function Presentation({ title, text, photo, id }) {
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      style={{ height: "100%",background:"purple" }}
    >
      <Grid item xs={12} sm={5} lg={4}   style={{ background:"brown" }} className="text-presentation">
        <Grid
          item
          xs={12}
          sm={12}
          className="title-presentation"
          style={{ background:"yellow"}}
        >
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          className="subtitle-presentation"
          style={{ background:"red"}}
        >
          <Typography variant="body2">{text}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} lg={4} className="image-presentation">
        <img src={photo} alt="team" className="presentation-image" />
      </Grid>
    </Grid>
  );
}
