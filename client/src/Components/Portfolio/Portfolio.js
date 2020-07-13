import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.scss";
import VideoPlayer from "../Video/VideoPlayer";
import { Grid, ButtonBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import camera from "../../Images/cameraPhoto.png";
import loading from "../../Images/Icons/loader.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    cursor: "pointer",
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
     backgroundPosition: "center",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "relative",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function Portfolio() {
  const [infoVideos, setInfoVideos] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const classes = useStyles();

  const getVideoInfos = async () => {
    const res = await axios.get(`http://localhost:5000/api/youtubeVideos`, {
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json",
      },
    });
    setInfoVideos(res.data.videos);
    setCurrentVideo(res.data.videos[0]);
  };

  useEffect(() => {
    getVideoInfos();
  }, []);

  useEffect(() => {
    console.log(infoVideos);
    if (infoVideos && currentVideo) {
      const filteredVideos = infoVideos.filter(
        (data) => data.id !== currentVideo.id
      );

      setPlaylistVideos(filteredVideos);
    }
  }, [currentVideo]);

  const handleSelectVideo = (data) => {
    setCurrentVideo(data);
  };

  return (
    <Grid container style={{ height: "100%" , background:"#f3d549"}}>
      <Grid
        container
        spacing={2}
        style={{
          height: "20%",
        }}
      >
        <Grid item xs={4} sm={3} lg={2} style={{ background:"#e37d4d", padding:'3%' }} >
          <Grid item xs={10} >
            <Typography variant='h5' color='primary'>Portfolio</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet 
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={8} sm={9} lg={10} style={{display:"flex"}}>
          {playlistVideos.map((data,i) => (
            <Grid xs={3} onClick={() => handleSelectVideo(data)} key={i} item style={{background:  `url(${data.urlThumbnail}` ,backgroundPosition:"center center", backgroundSize:"cover"}} >
             </Grid>))}
            
      
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        alignItems='center'
        style={{ height: "80%"
      }}
      >
          {currentVideo ? (
            <VideoPlayer video={currentVideo} />
          ) : (
            <img src={loading} alt="placeholder" className="portfolio_loadinImage" />
          )}
      </Grid>
      <Grid
        className={classes.root}
        item
        xs={12}
        style={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonBase
          focusRipple
          key="Camera"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "100%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${camera})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              Acesse a Playlist
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </Grid>
    </Grid>
  );
}
