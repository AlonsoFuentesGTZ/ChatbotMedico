import React from "react";
import { Link } from "react-router-dom";
import cases from "../data/cases";
import "../styles/CaseList.css";
const CaseList = () => {
  return (
    <div className="case-list-container">
      {cases.map((clinicalCase) => (
        <div key={clinicalCase.id} className="case-card">
          <img
            src={clinicalCase.mainImage} 
            alt={clinicalCase.patientName}
            className="main-image"
          />

          <div className="case-info">
            <h3>{clinicalCase.patientName}</h3>
            <p>{clinicalCase.description}</p>
            <Link to={`/caso/${clinicalCase.id}`} className="ver-mas-button">
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseList;
