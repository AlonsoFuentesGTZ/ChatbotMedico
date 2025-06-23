import React from 'react';
import { useParams, Link } from 'react-router-dom';
import cases from '../data/cases';  // Cambiado de projects a cases
import '../styles/CaseDetails.css'; // Cambiado de ProjectDetails.css a CaseDetails.css

const CaseDetails = () => {
  const { id } = useParams();
  const clinicalCase = cases.find(c => c.id === parseInt(id));

  if (!clinicalCase) return <p>Caso clínico no encontrado.</p>;

  return (
    <div className="case-details-container">
      <h2>{clinicalCase.patientName}</h2>
      <img src={clinicalCase.mainImage} alt={clinicalCase.patientName} className="main-image" />
      <p>{clinicalCase.description}</p>

      {clinicalCase.sections.map(section => (
        <div key={section.id} className="case-section">
          <h3>{section.title}</h3>
          <div className="section-content">
            <img src={section.imageUrl} alt={section.title} className="section-image" />
            <p>{section.text}</p>
          </div>
        </div>
      ))}

      <Link to="/casos" className="back-link">← Volver a Casos Clínicos</Link>
    </div>
  );
};

export default CaseDetails;
