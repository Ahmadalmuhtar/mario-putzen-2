import React from 'react'
import img from '../../../assets/images/Logo.png'

export default function Footer() {
    return (
        <>
            <footer
                id="footer"
                className="bg-blue-500 gap-12 text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left pt-6"
            >
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        <div className="">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <a
                                    href="https://www.marioputzen.com"
                                    target="_blank"
                                    className="flex items-center"
                                >
                                    {/* <img
                                        src={img}
                                        className="h-24 pr-4"
                                        alt="Mario Putzen Logo"
                                    /> */}
                                    <span className="hover:text-gray-200 hover:underline">
                                        Mario Putzen
                                    </span>
                                </a>
                            </h6>
                            <p>
                                Mit einem Team erfahrener Reinigungskräfte und
                                modernster Ausrüstung kümmern wir uns um Ihre
                                Außen- und Innenflächen. Egal ob Büro-,
                                Unterhalts- oder Glasreinigung
                            </p>
                        </div>
                        <div>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Kontakt Konstanz Filiale
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-gray-200 hover:underline">
                                <a
                                    className="flex items-center"
                                    href="https://maps.app.goo.gl/RJ2qVdayKp978f2z9"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>
                                    August-Borsig-Straße 9, 78467 Konstanz im
                                    Erdgeschoss
                                </a>
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-gray-200 hover:underline">
                                <a
                                    className="flex items-center"
                                    href="mailto:info@marioputzen.com?subject=Anfrage%20zur%20Dienstleistung&body=Guten%20Tag,%0A%0AIch%20interessiere%20mich%20für%20Ihre%20Dienstleistungen%20und%20möchte%20mehr%20darüber%20erfahren.%0A%0AMit%20freundlichen%20Grüßen,%0AVorname%20Nachname"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                    info@marioputzen.com
                                </a>
                            </p>
                            <a
                                href="tel:+4915202080771"
                                className="mb-4 flex items-center justify-center md:justify-start hover:text-gray-200 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>+49 1520 2080771</span>
                            </a>
                        </div>
                        <div>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Kontakt Essen Filiale
                            </h6>
                            <a
                                href="https://maps.app.goo.gl/Bvqzggn5wpECM8c87"
                                target="_blank"
                                className="mb-4 flex items-center justify-center md:justify-start hover:text-gray-200 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5"
                                >
                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                <span>Frohnhauserstraße 308, 45144 Essen</span>
                            </a>
                            <a
                                href="mailto:essen@marioputzen.com?subject=Anfrage%20zur%20Dienstleistung&body=Guten%20Tag,%0A%0AIch%20interessiere%20mich%20für%20Ihre%20Dienstleistungen%20und%20möchte%20mehr%20darüber%20erfahren.%0A%0AMit%20freundlichen%20Grüßen,%0AVorname%20Nachname"
                                className="mb-4 flex items-center justify-center md:justify-start hover:text-gray-200 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5"
                                >
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                <span>essen@marioputzen.com</span>
                            </a>

                            <a
                                href="tel:+4917641929503"
                                className="mb-4 flex items-center justify-center md:justify-start hover:text-gray-200 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>+49 1764 1929503</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-200 p-6 dark:bg-neutral-700 h-6 flex items-center justify-center text-neutral-600 text-center">
                    © 2024 Copyright: Mario Putzen
                </div>
            </footer>
        </>
    )
}
