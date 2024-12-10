import React from "react";
import MovieList from "../components/MovieList";
import { topRatedUrl } from "../constants";

function TopRatedPage() {
  return <MovieList url={topRatedUrl} />;
}

export default TopRatedPage;
