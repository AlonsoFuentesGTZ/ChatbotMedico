import React from "react";
import "../styles/Servicios.css";
import Footer from "../components/Footer";

const Servicios = () => {
  return (
    <>
      <div>
        <section className="servicios">
          <h2 className="servicio-title">Servicios Médicos</h2>
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fas fa-stethoscope"></i>
                  <h3>Especialidades Médicas</h3>
                </div>
                <div className="flip-card-back">
                  <p>Más de 25 especialidades, tales como Pediatría, Ginecología, Medicina General, Cardiología, Psicología, Nutrición, Ortopedia, entre otras.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fas fa-ambulance"></i>
                  <h3>Atención de Urgencias</h3>
                </div>
                <div className="flip-card-back">
                  <p>Servicio de emergencias 24/7 todos los días del año.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fab fa-cc-visa"></i>
                  <h3>Formas de Pago</h3>
                </div>
                <div className="flip-card-back">
                  <p>Aceptan tarjetas de crédito y débito (Visa, Mastercard, American Express), SINPE móvil y transferencias bancarias.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fas fa-shield-alt"></i>
                  <h3>Seguros Médicos</h3>
                </div>
                <div className="flip-card-back">
                  <p>Aceptan seguros de INS, BlueCross BlueShield, MAPFRE, Sagicor, ADISA, entre otros.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fas fa-parking"></i>
                  <h3>Parqueo</h3>
                </div>
                <div className="flip-card-back">
                  <p>Gratuito para pacientes, visitantes y personal médico, con espacios especiales para personas con discapacidad.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fab fa-instagram"></i>
                  <h3>Redes Sociales</h3>
                </div>
                <div className="flip-card-back">
                  <p>Puedes seguir al hospital en Instagram (@tatooinemedical), Facebook (/tatooinemedical) y TikTok.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fas fa-calendar-week"></i>
                  <h3>Atención los Fines de Semana</h3>
                </div>
                <div className="flip-card-back">
                  <p>Atención los sábados de 9:00 a.m. a 1:00 p.m. en Medicina General y Pediatría. El resto de especialidades varía según agenda.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fas fa-phone-alt"></i>
                  <h3>Agendar Citas</h3>
                </div>
                <div className="flip-card-back">
                  <p>Puedes agendar una cita llamando al 800-TATOOINE, escribiendo al correo citas@tatooinemedical.cr o directamente en línea desde la página oficial.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Servicios;
