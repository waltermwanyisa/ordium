import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";
import Work from "../components/Work/Work";
import RoadMap from "../components/RoadMap/RoadMap";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Faq from "../components/Faq/Faq";
import Disclaimer from "../components/Disclaimer/Disclaimer";

function ThemeOne() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Work />
      <Content />
      <RoadMap />
      <Faq />
      <Cta />
      <Disclaimer />
      <Footer />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
}

export default ThemeOne;
