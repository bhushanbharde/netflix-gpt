import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-24 w-screen aspect-video bg-gradient-to-r from-black absolute">
      <h1 className="text-6xl font-extrabold text-white w-1/2">{title}</h1>
      <p className="w-1/3 my-6">{overview}</p>
      <div className="flex items-center text-lg font-semibold">
        <button className="bg-[#E50914] px-6 py-1.5 border-0 mr-4 text-white rounded-sm flex items-center hover:bg-opacity-70">
          <i className="fa-solid fa-play mr-2 text-2xl"></i>Play
        </button>
        <button className="bg-white text-black px-6 py-1.5 rounded-sm flex items-center hover:bg-opacity-80">
          <i className="fa-solid fa-circle-info mr-2 text-2xl"></i>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
