import React from "react";
import "./QualityService.css";
import PhotoSlider from "../../ui/photo-slider/PhotoSlider";

const QualityService = () => {
  return (
    <div className="quality-service-section">
      <h2>Qualitätsservice</h2>
      <p className="sub-text">
        Einige der Dienstleistungen, die wir unseren Kunden anbieten
      </p>
      <PhotoSlider />
    </div>
  );
};

export default QualityService;