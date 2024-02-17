import React from 'react'
import BildImage from '../../../assets/images/Logo.png'
import Layout from '../../layout'

const Header = () => {
    return (
        <Layout>
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                <div className="mb-6 sm:mb-0 max-sm:max-w-48">
                    <img src={BildImage} alt="Mario Putzen Image" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-gray-100 p-6 sm:p-10">
                        <h3 className="text-base font-semibold leading-7 text-blue-700">
                            Konstanz
                        </h3>
                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                            <div>
                                <dt className="sr-only">Email</dt>
                                <dd>
                                    <a
                                        className="font-semibold text-gray-700 hover:text-red-700"
                                        href="mailto:Marioputzen25@gmail.com"
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
                                <dt className="sr-only">Address</dt>
                                <dd>Labharswegstraße 9, 78462 Konstanz</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="rounded-2xl bg-gray-100 p-6 sm:p-10">
                        <h3 className="text-base font-semibold leading-7 text-blue-700">
                            Essen
                        </h3>
                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                            <div>
                                <dt className="sr-only">Email</dt>
                                <dd>
                                    <a
                                        className="font-semibold text-gray-700 hover:text-red-700"
                                        href="mailto:Marioputzen30@gmail.com"
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
                                <dt className="sr-only">Address</dt>
                                <dd>Frohnhauserstraße 308, 45144 Essen</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Header
