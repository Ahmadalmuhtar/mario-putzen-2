import React from "react";
import BackgroundImage from "../../../assets/images/service-1.jpg";
import "./QuestionSection.css"

const QuestionsSection = () => {
  return (
    <section className="questions-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="dark-overlay">
        <div className="content">
          <h1>Haben Sie Fragen?</h1>
          <p>Sie erreichen uns per E-Mail oder unter einer unserer Nummern</p>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
