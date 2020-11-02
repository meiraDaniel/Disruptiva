import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import VideoPlayer from "../Video/VideoPlayer";
import { Grid, ButtonBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import camera from "../../Images/cameraPhoto.png";
import Loading from "../Loading/Loading";

import api from "../../Services/callApis";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    "@media (min-width:600px) and(orietation:landscape)": {
      height: "5%",
    },
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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
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
    cursor: "pointer",
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
  imgThumbnail: {
    backgroundSize: "cover !important",
  },
  topPortifolio: {
    height: "15%",
    "@media (min-width:600px) and (orientation:landscape)": {
      height: "25%",
    },
  },

  bottomPortfolio: {
    height: "65%",
    marginTop: "5%",
    "@media (min-width:600px) and (orientation:landscape)": {
      height: "65%",
    },
  },
}));

export default function Portfolio() {
  const [infoVideos, setInfoVideos] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const classes = useStyles();

  const getVideoInfos = async () => {
    const data = await api.getVideos();

    setInfoVideos(data.videos);
    setCurrentVideo(data.videos[0]);
  };

  useEffect(() => {
    getVideoInfos();
  }, []);

  useEffect(() => {
    if (infoVideos && currentVideo) {
      const filteredVideos = infoVideos.filter(
        (data) => data.id !== currentVideo.id
      );

      setPlaylistVideos(filteredVideos);
    }
  }, [currentVideo, infoVideos]);

  const handleSelectVideo = (data) => {
    setCurrentVideo(data);
  };

  return (
    <Grid container style={{ height: "100%", background: "#f3d549" }}>
      <Grid container className={classes.topPortifolio}>
        <Grid
          item
          xs={3}
          sm={3}
          lg={2}
          style={{ height: "100%", background: "#e37d4d", padding: "3%" }}
        >
          <Grid item xs={10}>
            <Typography variant="h5" color="primary">
              Portfólio
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Conheça nosso trabalho </Typography>
          </Grid>
        </Grid>
        <Grid item xs={9} lg={10} style={{ height: "100%", display: "flex" }}>
          {playlistVideos.map((data, i) => (
            <Grid
              xs={3}
              onClick={() => handleSelectVideo(data)}
              key={i}
              item
              className={classes.imgThumbnail}
              style={{
                background: `url(${data.urlThumbnail}`,
                cursor: "pointer",
              }}
            ></Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.bottomPortfolio}>
        {currentVideo ? (
          <Grid item xs={12} sm={10} lg={8} style={{ height: "90%" }}>
            <VideoPlayer video={currentVideo} />
          </Grid>
        ) : (
            <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Loading></Loading>
            </Grid>
          )}
      </Grid>
      <Grid className={classes.root} item xs={12}>
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
              <a
                className="acessePlayslit"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/playlist?list=PLPTwwbrJNg5Bs659JJYqVeR4vQlDTe3rD"
              >
                {" "}
                Acesse a Playlist
              </a>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </Grid>
    </Grid>
  );
}
