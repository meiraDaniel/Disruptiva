import React from "react";
import "./Card.scss";
import { Grid, Paper, Typography } from "@material-ui/core";

export default function Card({ title, text, icon, currentInd }) {
  return (
    <Paper
      elevation={2}
      style={{
        height: "30vh",
        width: "65%",
        margin: "auto",
        borderRadius: "30px",
      }}
    >
      <Grid
        container
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={4}
          style={{
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img className="images-card" src={icon} alt="icon" />
        </Grid>

        <Grid
          item
          xs={8}
          style={{
            background:'red',
            height: "70%",
              padding:'2.5%',
          }}
        >
          <Grid
            item
            xs={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap:"wrap",
              overflow:"hidden"
            }}
          >
            <Typography color="textSecondary" variant="h5">
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap:"wrap",
              overflow:"hidden"

            }}
          >
            <Typography color="textSecondary" variant="h6" paragraph>
              {text}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "15%",
            display: "flex",
            justifyContent: "center",
                        background:'blue',
                        margin:"0"

          }}
        >
          <span className={currentInd === 0 ? "color_red" : "color_white"}>
            &#9900;
          </span>
          <span className={currentInd === 1 ? "color_red" : "color_white"}>
            &#9900;
          </span>
          <span className={currentInd === 2 ? "color_red" : "color_white"}>
            &#9900;
          </span>
        </Grid>
      </Grid>
    </Paper>
  );
}
