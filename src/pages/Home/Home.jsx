import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";
import places from "../../data/places";

function Home() {
  const location = useLocation();

  return (
    <>
      <Hero />
      <PhotoSlider places={places} />
      <InfoBanner />
    </>
  );
}

export default Home;