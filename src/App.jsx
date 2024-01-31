import React from "react";
import "./App.css";
import Header from "./components/navigation/header/Header";
import WelcomeBanner from "./components/navigation/banner/WelcomeBanner";
import NavigationMenu from "./components/navigation/navigation-menu/NavigationMenu";
import PhotoGallery from "./components/ui/photo-gallery/PhotoGallery";
import AboutUs from "./components/sections/about/AboutUs";
import FeatureSection from "./components/sections/features/FeatureSection";
import QualityService from "./components/sections/quality-server/QualityService";

const App = () => {
  return (
    <>
      <WelcomeBanner />
      <Header />
      <NavigationMenu />
      <PhotoGallery />
      <AboutUs />
      <FeatureSection />
      <QualityService />
    </>
  );
};

export default App;
