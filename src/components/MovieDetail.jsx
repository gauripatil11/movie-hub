import React from "react";
import CastDetails from "./CastDetails";

function MovieDetail({ movie }) {
  const {
    id,
    poster_path,
    original_title,
    overview,
    vote_average,
    runtime,
    genres,
  } = movie;
  return (
    <>
      <div className="movie-detail-container">
        <div className="movie-detail">
          <img
            className="backgroundimg"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
          <div>
            <h2>{original_title}</h2>
            <p>Rating : {vote_average.toFixed(1)}</p>
            <p>{runtime} min</p>
            <p>{genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <div className="overview">
          <h5>Overview</h5>
          <p>{overview}</p>
        </div>
      </div>
      <CastDetails id={id} />
    </>
  );
}

export default MovieDetail;
