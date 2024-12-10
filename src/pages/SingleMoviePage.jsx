import React from "react";
import UseFetchApi from "../custom-hooks/UseFetchApi";
import { useParams } from "react-router-dom";
import { api_key } from "../constants";
import MovieDetail from "../components/MovieDetail";

function SingleMoviePage() {
  const { id } = useParams();
  const { data, loading, error } = UseFetchApi(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <MovieDetail movie={data} />;
}

export default SingleMoviePage;
