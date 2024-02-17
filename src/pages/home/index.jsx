import React from 'react'
import { WelcomeBanner, Header, Footer } from '../../components/navigation'
import { PhotoGallery } from '../../components/ui'
import {
    AboutSection,
    FeaturesSection,
    QualityCounterSection,
    QuestionSection,
} from '../../components/sections'

const HomePage = () => {
    return (
        <>
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
