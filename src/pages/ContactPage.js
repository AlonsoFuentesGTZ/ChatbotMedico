import React from "react";
import "../styles/ContactPage.css";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page-container">
        <h1>¡Gracias por visitarnos! ❤️‍🩹</h1>

        <div className="info-container">
          <h2>ℹ️ Recomendación</h2>
          <p>
            Si necesitás ayuda para programar una cita o querés información sobre nuestros servicios, contactanos al <strong>800-TATOOINE</strong> o escribinos al correo <strong>contacto@tatooinemedical.cr</strong>.
          </p>
        </div>

        <div className="map-container">
          <h2>Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19995475.417268753!2d-53.60067751342298!3d0.674667503164554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQwJzAwLjAiTiA1M8KwMzYnMjMuMCJX!5e0!3m2!1ses!2sus!4v1700000000000!5m2!1ses!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa de la Luna"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
