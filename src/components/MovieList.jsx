import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import UseFetchApi from '../custom-hooks/UseFetchApi';

function MovieList({ url }) {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState();
  const [totalPages, setTotalPages] = useState(1);

  const newUrl = `${url}&page=${page}`;

  const { data, loading, error } = UseFetchApi(newUrl);

  useEffect(() => {
    if (data) {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    }
  }, [data])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className='movie-container'>
      <div className='movie-list'>
        {
          movies && movies.map((movie) => {
            return <MovieCard {...movie} key={movie.id} />
          })
        }
      </div>

      <div className='pagination'>
        <button className='btn' onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button className='btn' onClick={handleNextPage} disabled={page === totalPages}>Next</button>
      </div>

    </div>
  )
}

export default MovieList