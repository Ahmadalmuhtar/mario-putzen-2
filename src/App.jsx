import React from 'react'
import './App.css'
import Header from './components/navigation/header/Header'
import WelcomeBanner from './components/navigation/banner/WelcomeBanner'
import PhotoGallery from './components/ui/photo-gallery/PhotoGallery'
import AboutUs from './components/sections/about/AboutUs'
import FeatureSection from './components/sections/features/FeatureSection'
import QuestionsSection from './components/sections/question-section/QuestionSection'
import QualityCounter from './components/sections/quality-counter/QualityCounter'
import Footer from './components/navigation/footer/Footer'
import { Helmet } from 'react-helmet'

const App = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mario Putzen Reinigungsdienst</title>
                <meta
                    name="description"
                    content="die beste Reinigungsdienst in Konstanz und Essen"
                />
            </Helmet>
            <WelcomeBanner />

            <Header />
            <PhotoGallery />
            <AboutUs />
            <FeatureSection />
            <QualityCounter />
            <QuestionsSection />
            <Footer />
        </>
    )
}

export default App
