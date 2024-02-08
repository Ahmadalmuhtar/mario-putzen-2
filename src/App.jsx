import React from "react";
import "./App.css";
import Header from "./components/navigation/header/Header";
import WelcomeBanner from "./components/navigation/banner/WelcomeBanner";
import PhotoGallery from "./components/ui/photo-gallery/PhotoGallery";
import AboutUs from "./components/sections/about/AboutUs";
import FeatureSection from "./components/sections/features/FeatureSection";
import QualityService from "./components/sections/quality-service/QualityService";
import QuestionsSection from "./components/sections/question-section/QuestionSection";
import QualityCounter from "./components/sections/quality-counter/QualityCounter";
import Footer from "./components/navigation/footer/Footer";

const App = () => {
  return (
    <>
      <WelcomeBanner />
      <Header />
      <PhotoGallery />
      <AboutUs />
      <FeatureSection />
      <QuestionsSection />
      <QualityCounter />
      <Footer />
    </>
  );
};

export default App;
