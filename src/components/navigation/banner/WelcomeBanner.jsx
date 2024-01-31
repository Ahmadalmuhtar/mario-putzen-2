import React from "react";
import "./WelcomeBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="left-content">
        <p>Willkommen bei MARIO PUTZEN Cleaning Services Company</p>
      </div>
      <div className="right-content">
        <div className="social-icon-container">
          <FontAwesomeIcon icon={faTiktok} className="social-icon tiktok" />
        </div>
        <div className="social-icon-container">
          <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
        </div>
        <div className="social-icon-container">
          <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
