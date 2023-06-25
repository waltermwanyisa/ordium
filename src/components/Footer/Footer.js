import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Footer() {
  const [data, setData] = useState({});
  const [socialData, setSocialData] = useState([]);
  const [widgetData, setWidgetData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/footer`)
      .then(res => {
        setData(res.data[0]);
        setSocialData(res.data[0].socialData);
        setWidgetData(res.data[0].widgetData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Logo */}
              <a className="navbar-brand" href="/">
                <img src={data.img} alt="Ordium Logo" style={{width:"235px",height:"55px"}} />
              </a>
              {/* Social Icons */}
              <div className="social-icons d-flex justify-content-center my-4">
                {socialData && socialData.map((item, idx) => {
                  return (
                    <a key={`fsd_${idx}`} href={item.link} target="_blank" rel="noreferrer">
                        <i className={item.icon} />
                        <i className={item.icon} />
                    </a>
                  );
                })}
              </div>
              {/* Copyright Area */}
              <div className="copyright-area py-4">
                {data && data.copyright} <a href={data && data.ownerLink} target="_blank" rel="noreferrer">{data && data.owner}</a>
              </div>
            </div>
            {/* Scroll To Top */}
            <div id="scroll-to-top" className="scroll-to-top">
              <a href="#header" className="smooth-anchor">
                <i className="fa-solid fa-arrow-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;