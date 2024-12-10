import React from "react";
import { popularMoviesUrl } from "../constants";
import MovieList from "../components/MovieList";

function HomePage() {
  return <MovieList url={popularMoviesUrl} />;
}

export default HomePage;
