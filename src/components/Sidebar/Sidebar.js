import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = "http://localhost:3001/sidebar";

function Sidebar() {
  const [data, setData] = useState({});
  const [widgetData1, setWidgetData1] = useState([]);
  const [widgetData2, setWidgetData2] = useState([]);
  const [widgetData3, setWidgetData3] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setData(res.data);
        setWidgetData1(res.data.widgetData_1);
        setWidgetData2(res.data.widgetData_2);
        setWidgetData3(res.data.widgetData_3);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <aside className="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">
      <div className="row">
        <div className="col-12 align-self-center text-left">
          <div className="item widget-categories">
            <h4 className="title">{data.widgetTitle_1}</h4>
            <ul className="list-group list-group-flush">
              {widgetData1.map((item, idx) => {
                return (
                  <li key={`wdo_${idx}`} className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="/blog">{item.title}</a>
                    <span className="badge circle">{item.content}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="item widget-tags">
            <h4 className="title">{data.widgetTitle_2}</h4>
            {widgetData2.map((item, idx) => {
              return (
                <a key={`wdt_${idx}`} href="/blog" className="badge tag">{item.title}</a>
              );
            })}
          </div>
          <div className="item widget-share-this">
            <h4 className="title">{data.widgetTitle_3}</h4>
            <ul className="navbar-nav social share-list">
              {widgetData3.map((item, idx) => {
                return (
                  <li key={`wdth_${idx}`} className="nav-item">
                    <Link to="/" className="nav-link"><i className={item.icon} /></Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;