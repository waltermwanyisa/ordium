import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Project from "../components/Project/Project";
// import Ico from "../components/Ico/Ico";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";

function ProjectPage() {
  return (
    <div className="main">
      <Header />
      <Banner title="Projects" />
      <Project />
      {/* <Ico /> */}
      <Footer />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
}

export default ProjectPage;
