import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Bienvenidos a Tatooine Medical Center</h1>
        <p>Tu asistente virtual para información, citas y atención general.</p>
        <div className="hero-buttons">
          <Link to="/contacto">
            <button className="contact-btn">Contáctanos</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
