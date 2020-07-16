import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ video, controls = true }) {
  const youtube_url = "https://www.youtube.com/watch?v=";

  return (
    <>
      {video && (
        <ReactPlayer
          width="100%"
          height="100%"
          url={youtube_url + video.idVideo}
          controls={controls}
        />
      )}
    </>
  );
}

export default VideoPlayer;
