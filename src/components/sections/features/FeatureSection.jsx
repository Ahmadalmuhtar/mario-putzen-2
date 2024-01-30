import React from "react";

import "./FeatureSection.css";

const FeatureSection = () => {
  const features = [
    {
      symbol: "🔧",
      text: "Expertin",
      explanation:
        "Unser modernes Unternehmen hat sich auf die Vielfältigkeit der Reinigung spezialisiert",
    },
    {
      symbol: "👥",
      text: "Dienstleistungen",
      explanation:
        "Mit einem Team erfahrener Reinigungskräfte und modernster Ausrüstung kümmern wir uns um Ihre Außen- und Innenflächen",
    },
    {
      symbol: "🌐",
      text: "Beratung",
      explanation: "Eine umfangreiche Beratung erhalten Sie von uns kostenfrei",
    },
    {
      symbol: "📞",
      text: "kostengünstig",
      explanation:
        "Wir bieten leistungsstarke Dienstleistungen zu wettbewerbsfähigen Preisen",
    },
  ];

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
