import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const initData = {
    sub_heading: "",
    heading: "Get Early Access to the Future of BRC-20",
    content: "Ordium is the first community-driven launchpad empowering BRC-20 & Oridinal projects and providing safety to early stage investors."
}

function Hero () {
    const [initDataState, setInitDataState] = useState({});

    useEffect(() => {
        setInitDataState(initData);
    }, []);

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-6 col-lg-9 text-center">
                        {/* Hero Content */}
                        <div className="hero-content">
                            <div className="intro text-center mb-5">
                                <span className="intro-text">{initDataState.sub_heading}</span>
                                <h1 className="mt-4">{initDataState.heading}</h1>
                                <p>{initDataState.content}</p>
                            </div>
                            {/* Buttons */}
                            <div className="button-group">
                                <Link className="btn btn-bordered active smooth-anchor" to="/projects">
                                    <i className="icon-rocket mr-2" />
                                    Join $ORUM IDO
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;