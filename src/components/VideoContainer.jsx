import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API_URL);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] &&
        videos.map((video) => <Link key={video.id}  to={`/watch?v=${video.id}`}><VideoCard info={video} /></Link>)}
    </div>
  );
};

export default VideoContainer;
