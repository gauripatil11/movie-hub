import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieCard({ id, poster_path, original_title, vote_average }) {
  const navigate = useNavigate();
  return (
    <div className='movie'>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        className='movie-img'
        onClick={() => navigate(`/single-movie/${id}`)}
      />
      <p className='movie-title'>{original_title}</p>
      <p className='movie-rating'>Rating : {vote_average.toFixed(1)}</p>
    </div>
  )
}

export default MovieCard