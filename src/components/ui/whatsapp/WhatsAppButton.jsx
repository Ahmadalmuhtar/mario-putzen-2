import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsAppButton = () => {
    const phoneNumber = '+491713471418'
    const message = 'Ich interessiere mich für ein Angebot'

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`
        window.open(url, '_blank')
    }

    return (
        <button
            onClick={handleClick}
            className="flex items-center bg-emerald-500 text-white p-2 rounded-full shadow-lg fixed bottom-4 right-4"
        >
            <FontAwesomeIcon icon={faWhatsapp} className="size-12 p-1" />
        </button>
    )
}

export default WhatsAppButton
