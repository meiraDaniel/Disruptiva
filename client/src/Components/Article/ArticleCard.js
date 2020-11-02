import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    background: '#e37d4d',
    color: 'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    "@media (min-width:500px)": {
      height: '150px',
      textAlign: 'center',
      textJustify: "center"
    }

  }

}));

function ArticleCard({ thumbnail, title, link }) {
  const classes = useStyles();



  return (
    <a href={link} target="blank_">
      <Card className={classes.root}>


        <CardMedia
          className={classes.media}
          image={thumbnail}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>

      </Card>
    </a>
  );
}

export default ArticleCard;
