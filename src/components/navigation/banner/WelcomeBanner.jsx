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
        <FontAwesomeIcon icon={faTiktok} className="social-icon tiktok" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
        <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
      </div>
    </div>
  );
};

export default WelcomeBanner;
