import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const initData = {
  sub_heading: "Exclusive",
  heading: "BRC20 IDOs",
  content: "",
  actionBtn: "Participate",
  filter_1: "All",
  filter_2: "Upcoming",
  filter_3: "Ongoing",
  filter_4: "Ended IDO",
};

function Project() {
  
  const [initDataState] = useState(initData);
  const [dataState, setDataState] = useState([]);
  const [filterOption, setFilterOption] = useState("All");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataState(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const filteredData = dataState.filter((item) => {
    if (filterOption === "All") {
      return true;
    } else if (filterOption === "Upcoming") {
      return item.project_status === "Upcoming";
    } else if (filterOption === "Ongoing") {
      return item.project_status === "Ongoing";
    } else if (filterOption === "Ended IDO") {
      return item.project_status === "Ended";
    }
    return true;
  });

  return (
    <section className="project-area explore-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <div className="intro text-center">
              <div className="intro-content">
                <span className="intro-text">{initDataState.sub_heading}</span>
                <h3 className="mt-3 mb-0">{initDataState.heading}</h3>
                <p>{initDataState.content}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-center">
          <div className="col-12"></div>
          <div className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-md-4">
            <label
              className={`btn d-table text-uppercase p-2 ${
                filterOption === "All" ? "active" : ""
              }`}
              onClick={() => setFilterOption("All")}
            >
              <span>{initDataState.filter_1}</span>
            </label>
            <label
              className={`btn d-table text-uppercase p-2 ${
                filterOption === "Upcoming" ? "active" : ""
              }`}
              onClick={() => setFilterOption("Upcoming")}
            >
              <span>{initDataState.filter_2}</span>
            </label>
            <label
              className={`btn d-table text-uppercase p-2 ${
                filterOption === "Ongoing" ? "active" : ""
              }`}
              onClick={() => setFilterOption("Ongoing")}
            >
              <span>{initDataState.filter_3}</span>
            </label>
            <label
              className={`btn d-table text-uppercase p-2 ${
                filterOption === "Ended IDO" ? "active" : ""
              }`}
              onClick={() => setFilterOption("Ended IDO")}
            >
              <span>{initDataState.filter_4}</span>
            </label>
          </div>
        </div>

        <div className="row explore-items items inner project">
          {filteredData.map((item, idx) => {
            return (
              <div
                key={`${idx}`}
                className="col-12 col-md-6 col-lg-4 item explore-item"
                data-groups={item.group}
              >
                <div className="card project-card">
                  <div className="media">
                    <a href={`/project-single/${item._id}`}>
                      <img
                        className="card-img-top avatar-max-lg"
                        src={item.game_image}
                        alt=""
                      />
                    </a>
                    <div className="media-body ml-4"></div>
                  </div>
                  {/* Project Body */}
                  <div className="card-body" style={{ marginTop: "1.5em" }}>
                    <a href={`/project-single/${item._id}`}>
                      <h5 className="m-0 mb-4">{item.game_name}</h5>
                    </a>
                    <div className="items">
                      {/* Single Item */}
                      <div className="single-item mb-4">
                        <span>Project Status: </span>
                        <span> {item.project_status}</span>
                      </div>
                    </div>
                    <h5 class="m-0">Description</h5>
                    <p style={{ height: "70px" }}>{item.game_description}</p>
                    <table class="table token-content table-borderless table-sm">
                      <tbody>
                        <tr>
                          <td>Amount:</td>
                          <td>
                            {item.amount_to_raise
                              ? item.amount_to_raise.toLocaleString("en-US")
                              : "TBA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Token Price:</td>
                          <td>TBA</td>
                        </tr>
                        <tr>
                          <td>Total Raised:</td>
                          <td>
                            {item.total_raised
                              ? item.total_raised.toLocaleString("en-US")
                              : "-"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="item-progress">
                      <div className="progress mt-4 mt-md-5">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${item.progress}%` }}
                          aria-valuenow={item.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          {item.progress}%
                        </div>
                      </div>
                      <div className="progress-sale d-flex justify-content-between mt-3">
                        <span>{item.total_raised.toLocaleString("en-US")}</span>
                        <span>
                          {item.amount_to_raise.toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Project Footer */}
                  <div className="project-footer d-flex align-items-center mt-4 mt-md-5">
                    <a
                      className="btn btn-bordered-white btn-smaller"
                      href={`/project-single/${item._id}`}
                    >
                      {initDataState.actionBtn}
                    </a>
                    {/* Social Share */}
                    <div className="social-share ml-auto">
                      <ul className="d-flex list-unstyled">
                        <li>
                          <a href="https://twitter.com/ordium_io">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://ordium.gitbook.io/ordium/">
                            <i className="fas fa-book" />
                          </a>
                        </li>
                        <li>
                          <a href="https://medium.com/@ordium/about">
                            <i className="fab fa-medium" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
