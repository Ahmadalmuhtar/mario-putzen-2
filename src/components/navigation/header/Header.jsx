import React from "react";
import BildImage from "../../../assets/images/Logo.png";

const Header = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div>
          <img src={BildImage} alt="Mario Putzen Image" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Konstanz
            </h3>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    className="font-semibold text-blue-700"
                    href="mailto:collaborate@example.com"
                  >
                    Marioputzen25@gmail.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+49 1520 2080771</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>Labharswegstraße 9, 78462 Konstanz</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Essen
            </h3>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    className="font-semibold text-blue-700"
                    href="mailto:Marioputzen25@gmail.com"
                  >
                    Marioputzen30@gmail.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+49 1726 228598</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>Frohnhauserstraße 308, 45144 Essen</dd>
              </div>
            </dl>
          </div>
        </div>
        {/* <div className="p-6 bg-gray-200 rounded-lg text-sm max-w-md">
          <div className="grid grid-cols-10">
            <FontAwesomeIcon icon={faPhone} className="col" />
            <p className="contact-detail">+49 1520 2080771</p>

            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p className="contact-detail">Marioputzen25@gmail.com</p>

            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p className="contact-detail">Labharswegstraße 9, 78462 Konstanz</p>
          </div>
        </div>
        <div className="">
          <div className="contact-set">
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span className="contact-detail">+49 1520 2080771</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span className="contact-detail">Marioputzen25@gmail.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span className="contact-detail">
                Labharswegstraße 9, 78462 Konstanz
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
