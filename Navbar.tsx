import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

 
  const scrollToSection = (sectionId: string) => {
   
    if (location.pathname !== '/') {
      navigate('/');
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="site-header">
      <div className="header-center">
        <figure>
          <Link to="/">
            <img src={logo} alt="HiperFilmes" className="logo" />
          </Link>
        </figure>

        <SearchBar />
      </div>

      <nav aria-label="navegação principal" className="botao-barra">
        <ul>
          <li>
            <a 
              href="#melhores" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('melhores');
              }}
            >
              Melhores
            </a>
          </li>
          <li>
            <a 
              href="#trailer" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('trailer');
              }}
            >
              Trailer em destaque
            </a>
          </li>
          <li>
            <a 
              href="#noscinemas" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('noscinemas');
              }}
            >
              Nos Cinemas
            </a>
          </li>
          <li>
            <a 
              href="#criticas" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('criticas');
              }}
            >
              Aclamados pela crítica
            </a>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;