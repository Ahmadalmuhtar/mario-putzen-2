import React from "react";
import { features } from "../../../data";

const FeatureSection = () => {
  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-block">
          <div className="feature-symbol">{feature.symbol}</div>
          <div className="feature-text">{feature.text}</div>
          <div className="feature-text">{feature.explanation}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
