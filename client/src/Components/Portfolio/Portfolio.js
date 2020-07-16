import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.scss";
import VideoPlayer from "../Video/VideoPlayer";
import { Grid, ButtonBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import camera from "../../Images/cameraPhoto.png";
import loading from "../../Images/Icons/loader.svg";

const listaVideos = [
  {
    id: 0,
    idVideo: "WYTkAwprLec",
    name:
      "VIDEO EM MOTION GRAPHICS DOMINGO11H11   CLIENTE KIMTARA NUMEROLOGIA 1",
    urlThumbnail: "https://i.ytimg.com/vi/WYTkAwprLec/mqdefault.jpg",
  },
  {
    id: 1,
    idVideo: "vAU4GlksQNo",
    name: "Corpo clinico de Cirurgia Cardiovascular   Hospital Madre Teresa",
    urlThumbnail: "https://i.ytimg.com/vi/vAU4GlksQNo/mqdefault.jpg",
  },
  {
    id: 2,
    idVideo: "d5kdwQ_GTwY",
    name: "A Noiva quer",
    urlThumbnail: "https://i.ytimg.com/vi/d5kdwQ_GTwY/mqdefault.jpg",
  },
  {
    id: 3,
    idVideo: "jkrAp93Zdn4",
    name: "360 Meridianos   Serra da Capivara",
    urlThumbnail: "https://i.ytimg.com/vi/jkrAp93Zdn4/mqdefault.jpg",
  },
  {
    id: 4,
    idVideo: "HGlYErdUdfI",
    name: "Video institucional   W3 Uniformes",
    urlThumbnail: "https://i.ytimg.com/vi/HGlYErdUdfI/mqdefault.jpg",
  },
];

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
  imgThumbnail: {
    backgroundSize: "cover !important",
  },
}));

export default function Portfolio() {
  const [infoVideos, setInfoVideos] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const classes = useStyles();

  const getVideoInfos = async () => {
    // const res = await axios.get(`http://localhost:5000/api/youtubeVideos`, {
    //   headers: {
    //     "Access-Control-Allow-Origin": true,
    //     "Content-Type": "application/json",
    //   },
    // });
    setInfoVideos(listaVideos);
    setCurrentVideo(listaVideos[0]);
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
  }, [currentVideo]);

  const handleSelectVideo = (data) => {
    setCurrentVideo(data);
  };

  return (
    <Grid container style={{ height: "100%", background: "#f3d549" }}>
      <Grid
        container
        style={{
          height: "20%",
        }}
      >
        <Grid
          item
          xs={3}
          sm={3}
          lg={2}
          style={{ height: "100%", background: "#e37d4d", padding: "3%" }}
        >
          <Grid item xs={10}>
            <Typography variant="h5" color="primary">
              Portfolio
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
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
                backgroundSize: "cover",
                cursor: "pointer",
              }}
            ></Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        style={{ height: "70%", marginTop: "5%" }}
      >
        {currentVideo ? (
          <Grid item xs={12} sm={8} style={{ height: "90%" }}>
            <VideoPlayer video={currentVideo} />
          </Grid>
        ) : (
          <Grid item xs={12} sm={6} style={{ height: "90%" }}>
            <img
              src={loading}
              alt="placeholder"
              className="portfolio_loadinImage"
            />
          </Grid>
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
