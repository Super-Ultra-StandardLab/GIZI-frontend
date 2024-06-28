"use client";

import React from "react";
import YouTube from "react-youtube";

const YouTubePage = () => {
  const videoId = "K_018wnNA-c";

  const opts = {
    style: { width: "50%", height: "40vw" },
    // height: window.screen.height * 0.4,
    // width: window.screen.width * 0.35,
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePage;
