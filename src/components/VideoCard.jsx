import React from "react";

const VideoCard = ({ info }) => {
//   console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 p-2 m-2">
      <img
        className="rounded-lg w-80 h-40"
        src={thumbnails.medium.url}
        alt={title}
      />
      <h2 className="font-bold py-2">{title}</h2>
      <p className="text-sm text-gray-600">{channelTitle}</p>
      <p className="text-sm text-gray-500">{statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
