import React, { useState } from 'react'
import BildImage from '../../../assets/images/cleaning-lady.svg'
import BildImage2 from '../../../assets/images/cleaner.svg'
import BildImage3 from '../../../assets/images/clean.svg'

const PhotoSlider = () => {
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const photos = [
        { src: BildImage, description: 'Description for Photo 1122' },
        { src: BildImage2, description: 'Description for Photo 22323' },
        { src: BildImage3, description: 'Description for Photo 2232323223' },
    ]

    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            setCurrentPhoto((prev) =>
                prev === 0 ? photos.length - 1 : prev - 1
            )
        } else {
            setCurrentPhoto((prev) =>
                prev === photos.length - 1 ? 0 : prev + 1
            )
        }
    }

    return (
        <div className="photo-slider pt-8">
            <button
                className="navigation-arrow left"
                onClick={() => handleArrowClick('left')}
            >
                {'<'}
            </button>
            <div className="photo-container">
                <div className="photo-box">
                    <img
                        src={photos[currentPhoto].src}
                        alt={photos[currentPhoto].description}
                        className="photo-img"
                    />
                    <div className="photo-description">
                        {photos[currentPhoto].description}
                    </div>
                </div>
            </div>
            <button
                className="navigation-arrow right"
                onClick={() => handleArrowClick('right')}
            >
                {'>'}
            </button>
        </div>
    )
}

export default PhotoSlider
