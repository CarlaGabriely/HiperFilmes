

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieById } from '../data/moviesData';
import { Movie } from '../types/Movie';
import './MovieDetail.css';

const MovieDetail: React.FC = () => {
  
 
  const { id } = useParams<{ id: string }>();
  
  
  const [movie, setMovie] = useState<Movie | null>(null);
  
  
  useEffect(() => {
    if (id) {
      const foundMovie = getMovieById(id);
      setMovie(foundMovie || null);
    }
  }, [id]); 
  if (!movie) {
    return (
      <main className="container">
        <div className="error-message">
          <h2>Filme não encontrado 😕</h2>
          <p>O filme que você procura não existe ou foi removido.</p>
          <Link to="/" className="btn-home">← Voltar para Home</Link>
        </div>
      </main>
    );
  }
  
  return (
    <main className="container">
      <article className="panel detalhes-filme">
        
       
        {movie.trailer && (
          <section className="trailer">
            <h2 className="section-title">Trailer</h2>
            <div className="video-container">
              <iframe
                width="100%"
                height="560"
                src={movie.trailer}
                title={`Trailer de ${movie.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

      
        <section>
          <h2 className="section-title">{movie.title}</h2>
          
          <div className="movie-meta">
            <p>
              <strong>Lançamento:</strong>{' '}
              <time dateTime={movie.year}>{movie.year}</time>
            </p>
            <p><strong>Gênero:</strong> {movie.genre}</p>
            {movie.duration && (
              <p><strong>Duração:</strong> {movie.duration}</p>
            )}
            <p>
              <strong>Nota:</strong>{' '}
              <span className="rating-badge">{movie.rating}/10</span>
            </p>
          </div>

          <h3>Sinopse</h3>
          <p className="synopsis">{movie.synopsis}</p>

          {movie.cast && (
            <>
              <h3>Elenco</h3>
              <p>{movie.cast}</p>
            </>
          )}

          {movie.ageRating && (
            <div className="age-rating-box">
              <span className={`age-chip age-${movie.ageRating}`}>
                {movie.ageRating}
              </span>
              <p>Não recomendado para menores de {movie.ageRating} anos.</p>
              {movie.ageReason && (
                <small>Motivo: {movie.ageReason}</small>
              )}
            </div>
          )}
        </section>
      </article>

      
      <p className="back-link">
        <Link to="/" className="voltar-home">← Voltar para a home</Link>
      </p>
    </main>
  );
};

export default MovieDetail;