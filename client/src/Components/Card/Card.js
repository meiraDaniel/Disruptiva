import React from "react";
import "./Card.scss";
import { Grid, Paper, Typography } from "@material-ui/core";

export default function Card({ title, text, icon, currentInd, flag }) {
  return (
    <Paper elevation={3} className="card" style={{ background: "#E37D4D" }}>
      <Grid container className="card-container">
        <Grid item xs={5} lg={4} className="card-image">
          <img className="images-card" src={icon} alt="icon" />
        </Grid>

        <Grid
          item
          xs={7}
          lg={8}
          className="card-text"
          style={{
            height: "100%",
            margin: "0",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="primary">
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              textAlign: "center",
            }}
            className="card-subtitle"
          >
              <Typography variant="body1">{text}</Typography>
          </Grid>
          <Grid item xs={12} className="card-carrosel">
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
      </Grid>
    </Paper>
  );
}
