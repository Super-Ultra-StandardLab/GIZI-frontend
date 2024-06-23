"use client";

import React from "react";
import YouTube from "react-youtube";

const YouTubePage = () => {
  const videoId = "K_018wnNA-c";

  const opts = {
    height: "300",
    width: "535",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePage;
