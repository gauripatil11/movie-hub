export const api_key = import.meta.env.VITE_API_KEY;

export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`;

export const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`;

export const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`;
