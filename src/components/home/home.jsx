import React from 'react';
import './home.css'; // Estilos podem ser mantidos no CSS
import '../../responsivo.css';
import profileImage from '../../../src/assets/wl.jpg'; // Ajuste o caminho da imagem

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-img">
        <img src={profileImage} alt="Foto de perfil Wellisson Lima" />
      </div>

      <div className="home-text">
        <h1>
          Prazer em conhecê-lo! Eu sou <br />
          <span>Wellisson Lima</span>
        </h1>
        <p>
          Sou Desenvolvedor Web Front End Junior, apaixonado por tecnologia, filmes, séries, animes e mangás. Busco
          melhorar minhas habilidades em programação todos os dias, aprender para mim é um prazer e colocar em prática o
          que aprendi é uma satisfação ímpar.
        </p>
        <a href="#contato">Contato</a>
      </div>
    </section>
  );
};

export default Home;
