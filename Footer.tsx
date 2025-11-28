

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="site-footer">
      <p>
     
        &copy; {currentYear} • HiperFilmes • Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;