import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Portfolio.scss";
import VideoPlayer from "../Video/VideoPlayer";

export default function Portfolio() {
  const [infoVideos, setInfoVideos] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const [playlistVideos, setPlaylistVideos] = useState([]);

  const url = "https://www.youtube.com/watch?v=";

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
    <div className="portfolio">
      {playlistVideos.map((data) => {
        return (
          <img
            key={data.id}
            className="img-thumbnail"
            onClick={() => handleSelectVideo(data)}
            src={data.urlThumbnail}
          />
        );
      })}

      <div className="video_player">
        <VideoPlayer video={currentVideo} />
      </div>
    </div>
  );
}
