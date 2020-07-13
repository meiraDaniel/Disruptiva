import React from "react";
import "./Presentation.scss";
import { Grid, Typography } from "@material-ui/core";

export default function PresentationSecond({ title, text, photo, id }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid
        item
        xs={10}
        md={7}
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "blue",
        }}
      >
        <img src={photo} alt="team" className="presentation-image" />
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        style={{
          height: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "red",
        }}
      >
        <Grid
          item
          xs={12}
          style={{ height: "20%", flexBasis: "0", background: "purple" }}
        >
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid
          item
          xs={9}
          style={{ height: "70%", flexBasis: "0", background: "pink" }}
        >
          <Typography variant="body2">{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
