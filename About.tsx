

import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <main className="container">
      <div className="about-content">
        <h1 className="page-title">Sobre o HiperFilmes</h1>
        
        <section className="about-section">
          <h2>Nossa Missão</h2>
          <p>
            O HiperFilmes é uma plataforma dedicada a trazer as melhores 
            recomendações de filmes para você. Nossa missão é ajudar 
            cinéfilos a descobrirem novos filmes e revisitarem clássicos.
          </p>
        </section>

        <section className="about-section">
          <h2>O que oferecemos</h2>
          <ul className="features-list">
            <li>📽️ Catálogo com os melhores filmes</li>
            <li>🎬 Trailers em destaque</li>
            <li>⭐ Avaliações e críticas</li>
            <li>🎭 Informações sobre elenco e produção</li>
            <li>🎵 Trilhas sonoras memoráveis</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Tecnologias Utilizadas</h2>
          <p>
            Este projeto foi desenvolvido como trabalho acadêmico utilizando:
          </p>
          <ul className="tech-list">
            <li><strong>React.js</strong> - Biblioteca para construção de interfaces</li>
            <li><strong>TypeScript</strong> - Tipagem estática para JavaScript</li>
            <li><strong>React Router</strong> - Navegação entre páginas</li>
            <li><strong>CSS3</strong> - Estilização moderna e responsiva</li>
          </ul>
        </section>

        <section className="about-section team-section">
          <h2>Equipe de Desenvolvimento</h2>
          <p>
            Desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas
            como trabalho final da disciplina de Front-end Frameworks.
          </p>
        </section>

        <section className="about-section">
          <h2>Contato</h2>
          <p>
            Tem sugestões ou encontrou algum problema? Entre em contato conosco!
          </p>
          <p className="contact-info">
            📧 Email: contato@hiperfilmes.com.br<br />
            🐙 GitHub: github.com/hiperfilmes
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;