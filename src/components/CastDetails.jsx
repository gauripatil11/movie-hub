import React from "react";
import { api_key } from "../constants";
import UseFetchApi from "../custom-hooks/UseFetchApi";

function CastDetails({ id }) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`;
  const { data } = UseFetchApi(url);
  return (
    <div>
      <h2 className="cast-heading">Cast</h2>
      <div className="cast-detail-container">
        {data &&
          data.cast.map((movie) => {
            return (
              <div className="cast-detail">
                <img
                  className="cast-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
                />
                <p>{movie.original_name}</p>
                <p>Character: {movie.character}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CastDetails;
``