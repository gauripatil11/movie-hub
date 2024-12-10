import React from "react";
import { api_key } from "../constants";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";

function SearchedPage() {
  const { query } = useParams();
  console.log({ query });

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}`;

  return <MovieList url={url} />;
}

export default SearchedPage;
