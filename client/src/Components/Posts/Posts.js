import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Posts.scss";
import ArticleCard from "../Article/ArticleCard";

const useStyles = makeStyles({
  buttonMore: {
    display: 'flex',
    justifyContent: "center",
    margin: "5%"

  }
});

const Posts = ({ articles }) => {
  const [activeArticles, setActiveArticles] = useState([]);
  const [numberVisibleArticles, setNumberVisibleArticles] = useState(4);
  const classes = useStyles();


  useEffect(() => {
    setActiveArticles(articles.slice(0, numberVisibleArticles));

  }, [articles, numberVisibleArticles]);

  return (
    <Grid container>
      <Grid container justify='center' spacing={3} >
        {activeArticles.map(({ link, thumbnail, title }, index) =>
          <Grid
            item
            xs={10}
            sm={5}
            lg={5}

            key={index}
          >
            <ArticleCard
              link={link}
              thumbnail={thumbnail}
              title={title}

            />
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} className={classes.buttonMore}>
        {articles.length > numberVisibleArticles && (
          <Button
            size="large"
            variant="contained"
            color='primary'
            className="articles-button"
            onClick={() => setNumberVisibleArticles(numberVisibleArticles + 2)}
          >
            More
          </Button>
        )}
      </Grid>
    </Grid>);

};

export default Posts;
