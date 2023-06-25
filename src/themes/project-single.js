import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Project from '../components/Project/ProjectSingle';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

class ProjectSingle extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Project />
                <Footer />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
    }
}

export default ProjectSingle;