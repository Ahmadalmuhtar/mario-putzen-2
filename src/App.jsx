import React from 'react'
import './App.css'
import { Helmet } from 'react-helmet'
import { HomePage } from './pages'

const HemletWrapper = () => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>Mario Putzen Reinigungsdienst</title>
        <meta
            name="description"
            content="die beste Reinigungsdienst in Konstanz und Essen"
        />
    </Helmet>
)

const App = () => {
    return (
        <>
            <HemletWrapper />
            <HomePage />
        </>
    )
}

export default App
