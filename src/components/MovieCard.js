import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import MovieDetails from "./MovieDetails";

const MovieCard = ({ posterPath }) => {
  const handleMoviePopup = () => {
    console.log("handleMoviePopup");
  }

  return (
    <div className="w-44 mr-3">

      <Link>
        <img
          onClick={handleMoviePopup}
          className="rounded-sm"
          alt=""
          src={IMG_CDN_URL + posterPath}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
