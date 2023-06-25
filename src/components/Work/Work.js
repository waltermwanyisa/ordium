import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Work(){

  const [dataState, setDataState] = useState({
    sub_heading: "About Us",
    heading: ""
  });

  const [workDataState, setWorkDataState] = useState([]);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BASE_URL}/homework`)
      .then((res) => {
        setDataState({
          sub_heading: res.data[0].sub_heading,
          heading: res.data[0].heading
        });
        setWorkDataState(res.data[0].workData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="work-area pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end mb-4">
              <div className="intro-content">
                <span className="intro-text">{dataState.sub_heading}</span>
                <h3 className="mt-3 mb-0">{dataState.heading}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        {workDataState && workDataState.map((item, idx) => (
          <div key={`wd_${idx}`} className="col-12 col-sm-6 col-md-4 item mt-5">
            {/* Single Work */}
            <div className="single-work">
              <FontAwesomeIcon icon={item.icon} size="3x" />
              <h4>{item.title}</h4>
              <p>
                {item.content}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
