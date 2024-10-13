import React from 'react';
import './habilidades.css'; // Importar o arquivo de estilos

const Habilidades = () => {
  const habilidades = [
    { nome: 'HTML', experiencia: '1 ano de experiência' },
    { nome: 'CSS', experiencia: '1 ano de experiência' },
    { nome: 'Javascript', experiencia: '1 ano de experiência' },
    { nome: 'Acessibilidade', experiencia: '1 ano de experiência' },
    { nome: 'Git', experiencia: '1 ano de experiência' },
    { nome: 'GitHub', experiencia: '1 ano de experiência' },
    { nome: 'ReactJS', experiencia: '1 ano de experiência' },
  ];

  return (
    <section className="habilidades">
      {habilidades.map((habilidade, index) => (
        <div key={index}>
          <h2>{habilidade.nome}</h2>
          <p>{habilidade.experiencia}</p>
        </div>
      ))}
    </section>
  );
};

export default Habilidades;
