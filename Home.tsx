

import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { getMoviesByCategory } from '../data/moviesData';
import { Movie } from '../types/Movie';
import './Home.css';

const Home: React.FC = () => {
  
 
 
  const [melhores, setMelhores] = useState<Movie[]>([]);
  const [noscinemas, setNosCinemas] = useState<Movie[]>([]);
  const [criticas, setCriticas] = useState<Movie[]>([]);
  
  
  useEffect(() => {
    
    setMelhores(getMoviesByCategory('melhores'));
    setNosCinemas(getMoviesByCategory('noscinemas'));
    setCriticas(getMoviesByCategory('criticas'));
  }, []); 
  
return (
  <main className="container">
    

    <section id="melhores" aria-labelledby="melhores-title">
      <h2 id="melhores-title" className="section-title">Melhores</h2>
      
      <div className="cards">
        {melhores.map(movie => (
          <MovieCard 
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>

  
    <section id="noscinemas" aria-labelledby="noscinemas-title">
      <h2 id="noscinemas-title" className="section-title">Nos Cinemas</h2>
      
      <div className="cards">
        {noscinemas.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>

    
    <section id="criticas" aria-labelledby="criticas-title">
      <h2 id="criticas-title" className="section-title">Aclamados pela crítica</h2>
      
      <div className="cards">
        {criticas.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>

   
    <section id="trailer" className="trailer-block" aria-labelledby="trailer-title">
      <h2 id="trailer-title" className="section-title">Trailer em destaque</h2>
      
      <div className="video-container">
        <iframe
          width="100%" 
          height="600"
          src="https://www.youtube.com/embed/SNMTY1-XlOE?enablejsapi=1&rel=0&modestbranding=1"
          title="Trailer em destaque"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      
    </section>

    
    
  </main>
);
};
export default Home;