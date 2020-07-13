import React from "react";
import "./Presentation.scss";
import { Grid, Typography } from "@material-ui/core";

export default function Presentation({ title, text, photo, id }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={12} sm={5} lg={4} className="text-presentation">
        <Grid
          item
          xs={12}
          sm={7}
          className="title-presentation"
          style={{ flexBasis: 0 }}
        >
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          className="subtitle-presentation"
          style={{ flexBasis: 0 }}
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
