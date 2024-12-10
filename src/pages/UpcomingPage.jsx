import React from "react";
import MovieList from "../components/MovieList";
import { upcomingUrl } from "../constants";

function UpcomingPage() {
  return <MovieList url={upcomingUrl} />;
}

export default UpcomingPage;
