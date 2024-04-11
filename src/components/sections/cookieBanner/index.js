import posthog from 'posthog-js'
import { useState } from 'react';

function CookieBanner() {
    const [showBanner, setShowBanner] = useState(true);

    const acceptCookies = () => {
        posthog.opt_in_capturing();
        setShowBanner(false);
    };

    return (
        <div className='bg-blue-500 text-white pt-2 sticky top-0 z-20 text-center'>
            {showBanner && (
                <div>
                    <p className='mx-20'>
                        Für die ordnungsgemäße Funktion unserer Website setzen wir so genannte Cookies ein. die für die Nutzung unserer Webseiten zwingend erforderlich sind, funktionale Cookies, die Dir mehr Komfort bei der Nutzung unserer Webseiten bieten, Mit Ihrem Klick auf „Einverstanden“ stimmen Sie zu. Ein Widerruf ist jederzeit möglich
                    </p>
                    <div className='p-3 flex flex-row space-x-5 justify-end'>
                        <button className='border p-1 bg-white text-black rounded-md hover:bg-gray-100' type="button" onClick={acceptCookies}>
                            Einverstanden
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CookieBanner;