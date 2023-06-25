import React from 'react';
import { Link } from 'react-router-dom';
import Walletconnect from "../../themes/Walletconnect";

function Header () {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar gameon-navbar navbar-expand">
                <div className="container header">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        <img src="/img/ordium_logo.png" alt="Brand Logo" />
                    </Link>
                    <div className="ml-auto" />
                    {/* Navbar Nav */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item" style={{ marginRight: '5rem', marginTop:"0.2em" }}>
                            <Link to="/" className="nav-link" style={{fontSize:"1.2em"}}>Home</Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '4rem', marginTop:"0.2em" }}>
                            <Link to="/projects" className="nav-link" style={{fontSize:"1.2em"}}>IDOs</Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '1.5rem', marginTop:"0.8em" }}>
                            <a href="https//twitter.com/ordium_io" style={{fontSize:"1.5em"}}>
                                <i className="icon-social-twitter" />
                            </a>
                        </li>
                        <li className="nav-item" style={{ marginRight: '1.5rem', marginTop:"0.8em" }}>
                            <a href="https://ordium.gitbook.io/ordium/" style={{fontSize:"1.5em"}}>
                                <i class="fa-solid fa-book"></i>
                            </a>
                        </li>
                        <li className="nav-item" style={{ marginTop:"0.8em" }}>
                            <a href="https://medium.com/@ordium/about" style={{fontSize:"1.5em"}}>
                                <i className="fab fa-medium" />
                            </a>
                        </li>

                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="icon-menu m-0" />
                            </a>
                        </li>
                    </ul>
                    {/* WalletConnect */}
                    <ul className="navbar-nav action">
                        <Walletconnect />
                    </ul>
                </div>
            </nav>
            {/* <div className="social-icons d-flex justify-content-center my-3" style={{display:"none"}}>
                <li className="nav-item">
                    <a href="https://twitter.com/ordium_io" target="_blank" rel="noreferrer">
                        <i className="icon-social-twitter" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://twitter.com/ordium_io" target="_blank" rel="noreferrer">
                        <i className="icon-notebook" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://twitter.com/ordium_io" target="_blank" rel="noreferrer">
                        <i className="icon-book-open" />
                    </a>
                </li>
            </div> */}
        </header>
    );
};

export default Header;