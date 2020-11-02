import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Posts from "../Components/Posts/Posts";

import "./BlogPosts.scss";
import Navegation from './../Components/Navegation/Navegation';

const useStyles = makeStyles({
  navigation: {
    height: "10%",
    background: "#cf15531e",


    "@media (min-width:1031px)": {
      height: "20%"

    }
  },
  posts: {
    marginTop: "3%"

  }
});
export default function BlogPosts({ articles }) {
  const classes = useStyles();

  return (

    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12} className={classes.navigation}>

        <Navegation />
      </Grid>

      <Grid item xs={12} className={classes.posts} >
        <Posts articles={articles} />
      </Grid>

    </Grid>

  );
}