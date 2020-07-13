import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Portfolio.scss";
import VideoPlayer from "../Video/VideoPlayer";

export default function Portfolio() {
  const [infoVideos, setInfoVideos] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const [playlistVideos, setPlaylistVideos] = useState([]);

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
      <div className="portifolio--top-playlist">
        <div className="portifolio-left">
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="portfolio-images-map">
          {playlistVideos.map((data) => (
            <div className="img-thumbnail">
              <img
                key={data.id}
                onClick={() => handleSelectVideo(data)}
                src={data.urlThumbnail}
              />
            </div>
          ))}
        </div>
        <div className="portifolio-left">
          <h1>Acesse a playlist</h1>
        </div>
      </div>
      <div className="video_player">
        <div className="video_player-content">
          <VideoPlayer video={currentVideo} />
        </div>
      </div>
    </div>
  );
}
