import React, { useState } from "react";
import "./PhotoGallery.css";
import BildImage from "../../../assets/images/Bild.jpg";
import BildImage2 from "../../../assets/images/Bild2.jpg";

const PhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    { src: BildImage, text: "Description for Photo 1" },
    { src: BildImage2, text: "Description for Photo 2" },
  ];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    } else {
      setCurrentPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="photo-gallery">
      <button
        className="navigation-arrow left"
        onClick={() => handleArrowClick("left")}
      >
        {"<"}
      </button>
      <div
        className="photo-item"
        onMouseOver={() => setCurrentPhoto(currentPhoto)}
      >
        <img
          src={photos[currentPhoto].src}
          alt={photos[currentPhoto].text}
          className="photo-img"
        />
        <div className="photo-text">
          <p>{photos[currentPhoto].text}</p>
        </div>
      </div>
      <button
        className="navigation-arrow right"
        onClick={() => handleArrowClick("right")}
      >
        {">"}
      </button>
      <button
        className="navigation-arrow left"
        onClick={() => handleArrowClick("right")}
      >
        {"<"}
      </button>
    </div>
  );
};

export default PhotoGallery;
