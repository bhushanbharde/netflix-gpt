import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 mr-2">
      <img alt="" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
