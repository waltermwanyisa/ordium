import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import IGOApply from "../components/Apply/Apply";
import Ico from "../components/Ico/Ico";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";

function Apply() {
  return (
    <div className="main">
      <Header />
      <Banner title="Apply for IDO" />
      <IGOApply />
      <Ico />
      <Footer />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
}

export default Apply;
