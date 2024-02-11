import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie movie__item" key={movie.imdbID}>
      <div className="movie__item-year">{movie.Year}</div>
      <div className="movie__item-poster">
        <img
          src={
            movie.Poster !== `N/A`
              ? movie.Poster
              : `https://via.placeholder.com/400`
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie__item-title">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
