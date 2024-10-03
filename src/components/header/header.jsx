import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './header.css'; // Estilos podem ser mantidos no CSS

const Header = () => {
  return (
    <header className="cabecalho">
      <div className="logo">
        <a href="#home">
          <h3>WellissonLima</h3>
        </a>
      </div>

      <div className="redes">
        <ul>
          <li>
            <a
              href="https://github.com/WellissonLima"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wellissonboanergesbarroslima"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://we.me/5583981426455/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
