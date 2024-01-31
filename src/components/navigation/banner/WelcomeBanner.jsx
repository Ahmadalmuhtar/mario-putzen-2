import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const WelcomeBanner = () => {
  return (
    <div className="border-b border-gray-100 text-gray-800 py-2">
      <div className="max-w-5xl mx-auto items-center flex justify-between">
        <div className="text-sm font-semibold ">
          <p>Willkommen bei MARIO PUTZEN Cleaning Services Company</p>
        </div>
        <div className="flex gap-x-3">
          <a
            href="https://www.tiktok.com/@marioputzen?lang=de-DE"
            className="hover:scale-105
          tarnsform-all duration-300 ease-in-out
          "
          >
            <FontAwesomeIcon icon={faTiktok} className="text-black" />
          </a>
          <a
            href="https://www.tiktok.com/@marioputzen?lang=de-DE"
            className="hover:scale-105
          tarnsform-all duration-300 ease-in-out
          "
          >
            <FontAwesomeIcon icon={faInstagram} className="text-pink-700" />
          </a>
          <a
            href="https://www.tiktok.com/@marioputzen?lang=de-DE"
            className="hover:scale-105
          tarnsform-all duration-200 ease-in-out
          "
          >
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
