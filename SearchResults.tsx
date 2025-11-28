

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../data/moviesData';
import { Movie } from '../types/Movie';
import './SearchResults.css';

const SearchResults: React.FC = () => {
  
  const [searchParams] = useSearchParams();
  
  
  const query = searchParams.get('q') || '';
  
  
  const [results, setResults] = useState<Movie[]>([]);
  
 
  const [loading, setLoading] = useState(true);
  
 
  useEffect(() => {
    setLoading(true);
    

    setTimeout(() => {
      const foundMovies = searchMovies(query);
      setResults(foundMovies);
      setLoading(false);
    }, 500); 
    
  }, [query]); 
  
  return (
    <main className="container">
      <div className="search-results-header">
        <h1 className="page-title">
          Resultados para: <span className="search-term">"{query}"</span>
        </h1>
        <Link to="/" className="btn-back">← Voltar</Link>
      </div>
      
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Buscando filmes...</p>
        </div>
      ) : (
        <>
          
          {results.length > 0 ? (
            <>
              <p className="results-count">
                Encontrados <strong>{results.length}</strong> filme(s)
              </p>
              <div className="cards">
                {results.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </>
          ) : (
           
            <div className="no-results">
              <div className="no-results-icon">🎬</div>
              <h2>Nenhum filme encontrado</h2>
              <p>
                Não encontramos filmes com o termo "{query}".
                <br />
                Tente buscar por outro título, gênero ou ator.
              </p>
              <Link to="/" className="btn-home-alt">
                Voltar para Home
              </Link>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default SearchResults;