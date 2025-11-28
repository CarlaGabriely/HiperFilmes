

import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  
 
  const [searchTerm, setSearchTerm] = useState('');
  
  
  const [helpMessage, setHelpMessage] = useState('');
  
  const navigate = useNavigate();
  
  
  const MIN_LENGTH = 3;
  
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    
    if (value.length > 0 && value.length < MIN_LENGTH) {
      setHelpMessage(`Digite pelo menos ${MIN_LENGTH} caracteres para pesquisar.`);
    } else {
      setHelpMessage('');
    }
  };
  
 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    
    
    if (searchTerm.length < MIN_LENGTH) {
      setHelpMessage(`Digite pelo menos ${MIN_LENGTH} caracteres para pesquisar.`);
      return;
    }
    
   
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <form className="barra-busca" onSubmit={handleSubmit}>
      {/* Label oculto para acessibilidade (leitores de tela) */}
      <label htmlFor="search-input" className="sr-only">
        Pesquisar filmes
      </label>
      
     
      <input
        id="search-input"
        type="search"
        className="digitacao"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleInputChange}
      />
      
  
      {helpMessage && (
        <small className="search-help" aria-live="polite">
          {helpMessage}
        </small>
      )}
      
     
      <button 
        className="botao" 
        type="submit"
        disabled={searchTerm.length < MIN_LENGTH}
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;