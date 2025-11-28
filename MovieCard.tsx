import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types/Movie';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

 
  const handleAgeClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    alert(`Classificação: ${movie.ageRating}\nMotivo: ${movie.ageReason}`);
  };

  
  const handleInteractiveClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
  };

  return (
    <article 
      className="card" 
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
    
      <figure className="card-media">
        <img 
          className="card-cover" 
          src={movie.poster} 
          alt={`Cartaz: ${movie.title}`} 
        />
        <figcaption className="sr-only">
          Cartaz do filme {movie.title}
        </figcaption>
      </figure>

     
      <div className="badge">
        {movie.genre}
        {movie.ageRating && (
          <button 
            type="button" 
            className="open-age"
            onClick={handleAgeClick}
          >
            Classificação
          </button>
        )}
      </div>

     
      <div className="card-body">
      
        <h3 className="card-title">
          <span>{movie.title}</span>
        </h3>
        
       
        <p className="card-text">
          <time dateTime={movie.year}>{movie.year}</time> · {movie.genre}
        </p>

       
        <details onClick={handleInteractiveClick}>
          <summary>Sinopse</summary>
          <p>{movie.synopsis}</p>
        </details>

       
        <div className="card-footer">
          <span className="read-more">
            Ver mais →
          </span>
        
          <meter 
            min={0} 
            max={10} 
            value={movie.rating} 
            title={`Nota ${movie.rating}/10`}
          >
            {movie.rating}/10
          </meter>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;