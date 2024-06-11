import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTiktok,
    faInstagram,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const WelcomeBanner = () => {
    return (
        <div className="text-gray-800 py-3">
            <div className="max-w-5xl mx-auto items-center flex justify-between flex-wrap lg:flex-no-wrap">
                <div className="flex space-x-4 text-sm font-semibold w-full lg:w-auto lg:mb-0 mb-2 lg:text-left text-center items-center">
                    <div className="space-x-3 flex justify-center max-w-5xl mx-auto">
                        <div className="flex space-x-2 items-center">
                            <EnvelopeIcon className="size-5" />
                            <a
                                className="font-semibold text-gray-700 hover:text-red-700 hover:underline"
                                href="mailto:info@marioputzen.com"
                            >
                                info@marioputzen.com
                            </a>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <PhoneIcon className="size-5" />
                            <a
                                href="tel:+491713471418"
                                className="font-semibold text-gray-700 hover:text-red-700 hover:underline"
                            >
                                +49 171 3471418
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full lg:w-auto items-center">
                    <a
                        href="https://www.tiktok.com/@marioputzen"
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
                        href="https://www.instagram.com/marioputzen/?next=%2F"
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
