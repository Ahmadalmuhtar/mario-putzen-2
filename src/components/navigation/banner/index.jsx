import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTiktok,
    faInstagram,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const WelcomeBanner = () => {
    return (
        <div className="border-b border-gray-100 text-gray-800 py-3 bg-gray-100 shadow-sm sticky top-0 z-10">
            <div className="max-w-5xl mx-auto items-center flex justify-between flex-wrap lg:flex-no-wrap">
                <div className="text-sm font-semibold w-full lg:w-auto lg:mb-0 mb-2 lg:text-left text-center">
                    <p>Willkommen bei MARIO PUTZEN Cleaning Services Company</p>
                </div>
                <div className="flex justify-center w-full lg:w-auto">
                    <a
                        href="https://www.tiktok.com/@mario.putzen"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-105 transform-all duration-300 ease-in-out m-2"
                    >
                        <FontAwesomeIcon
                            icon={faTiktok}
                            className="text-black text-2xl"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/Mario.putzen"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-105 transform-all duration-300 ease-in-out m-2"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-pink-700 text-2xl"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61555927482726"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-105 transform-all duration-200 ease-in-out m-2"
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-blue-600 text-2xl"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner
