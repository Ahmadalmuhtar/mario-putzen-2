import React, { useEffect } from 'react'
import { WelcomeBanner, Header, Footer } from '../../components/navigation'
import { PhotoGallery } from '../../components/ui'
import {
    AboutSection,
    FeaturesSection,
    QualityCounterSection,
    QuestionSection,
} from '../../components/sections'
import ReactGA from 'react-ga'
import CookieBanner from '../../components/sections/cookieBanner'
import posthog from 'posthog-js'

const HomePage = () => {
    useEffect(() => {
        ReactGA.initialize('G-TP17LJTHBW')
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <>
            {posthog.has_opted_out_capturing() ||
            posthog.has_opted_in_capturing() ? null : (
                <CookieBanner />
            )}
            <WelcomeBanner />
            <Header />
            <PhotoGallery />
            <AboutSection />
            <FeaturesSection />
            <QualityCounterSection />
            <QuestionSection />
            <Footer />
        </>
    )
}

export default HomePage
