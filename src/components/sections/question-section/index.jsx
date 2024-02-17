import React, { useState } from 'react'
import Layout from '../../layout'

const QuestionSection = () => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {}

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Layout>
            <section className="bg-gray-200 py-12 pt-8 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Haben Sie Fragen?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Sie erreichen uns per E-Mail oder unter einer unserer
                        Nummern!
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className={`bg-blue-700 hover:bg-blue-800 transition-all duration-200 ease-in-out text-white font-bold py-2 px-4 rounded ${
                                open && 'bg-blue-800'
                            }`}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <form
                    className={classNames(
                        !open && 'hidden',
                        'flex-col space-y-3 max-w-3xl mx-auto bg-white p-10'
                    )}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900 pt-4 text-left"
                        >
                            Vor-Nachname:
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                                placeholder="Max Mustermann"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900 text-left"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                                placeholder="Max.nusterman@example.de"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium leading-6 text-gray-900 text-left"
                        >
                            Nachricht
                        </label>
                        <div className="mt-2">
                            <textarea
                                name="message"
                                id="message"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                                placeholder="Ihre Nachricht hier..."
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-blue-700 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Senden
                        </button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}

export default QuestionSection
