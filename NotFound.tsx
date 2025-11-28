

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <main className="container">
      <div className="not-found-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Página Não Encontrada</h1>
        <p className="error-description">
          Ops! Parece que você se perdeu no cinema. 🎬
          <br />
          A página que você procura não existe ou foi removida.
        </p>
        
        <div className="error-actions">
          <Link to="/" className="btn-primary">
            🏠 Ir para Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary"
          >
            ← Voltar
          </button>
        </div>
        
        <div className="error-suggestion">
          <p>Sugestões do que fazer:</p>
          <ul>
            <li><Link to="/">Ver catálogo de filmes</Link></li>
            <li><Link to="/about">Conhecer mais sobre nós</Link></li>
            <li><Link to="/#melhores">Ver melhores filmes</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default NotFound;