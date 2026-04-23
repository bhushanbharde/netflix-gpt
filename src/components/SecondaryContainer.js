import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div>
      <div className="-mt-64 z-20 relative">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies?.nowPlayingMovies} />
        <MovieList title="Upcoming" movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
