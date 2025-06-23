import React from "react";
import "../styles/OperatingHours.css";
import Footer from "../components/Footer";

const OperatingHours = () => {
  return (
    <>
      <div className="operating-hours-container">
        <h1 className="operating-hours-title">Horario</h1>
        <table className="operating-hours-table">
          <thead>
            <tr>
              <th>Días</th>
              <th>Horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lunes</td>
              <td>08:00 AM - 06:00 PM</td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>08:00 AM - 06:00 PM</td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>08:00 AM - 06:00 PM</td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>08:00 AM - 06:00 PM</td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>08:00 AM - 06:00 PM</td>
            </tr>
            <tr>
              <td>Sábado</td>
              <td>09:00 AM - 01:00 PM</td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td>Cerrado</td>
            </tr>
          </tbody>
        </table>

        <div className="visitation-hours">
          <h2 className="visitas">👥 Horarios de Visita</h2>
          <p>
            - Lunes a Domingo: 10:00 a.m. a 7:00 p.m.
            <br />
            - En unidades como UCI u hospitalización especial, los horarios pueden variar y se recomienda confirmarlo directamente con el hospital.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OperatingHours;
