import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-google-charts";
import { useMediaQuery } from '@material-ui/core';
import "./Content.css";

function Content() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [data, setData] = useState(null);
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/content`)
      .then((res) => {
        setData(res.data[0]);
        setContentData(res.data[0].contentData);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("Content data loaded."));
  }, []);

  if (!data || !contentData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="content-area pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12">
            <div className="content intro">
              <span className="intro-text">{data.sub_heading}</span>
              <h2>{data.heading}</h2>
              <p>{data.excerpt}</p>
              <ul
                className="list-unstyled items mt-5"
                style={{ display: "none" }}
              >
                {contentData.map((item, idx) => (
                  <li key={`cd_${idx}`} className="item">
                    <div className="content-list d-flex align-items-center">
                      <div className="content-icon">
                        <span className={item.featured}>
                          <i className={item.icon} />
                        </span>
                      </div>
                      <div className="content-body ml-4">
                        <h5 className="m-0">{item.title}</h5>
                        <p className="mt-2">{item.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="col-12 col-md-12 google-chart-wrapper"
            style={{ marginTop: "-3em" }}
          >
            <div className="content intro"></div>
            {isMobile ? (
              <div className="content intro mt-5 mb-5" style={{marginBottom:"2em"}}>
                <img src="img/chart.png" alt="Chart" />
              </div>
            ) : (
              <Chart
                width={"100%"}
                height={"600px"}
                chartType="PieChart"
                loader={<div>Loading...</div>}
                data={[
                  ["Task", "Hours per Day"],
                  ["IDO", 30000000],
                  ["MARKETING", 10000000],
                  ["COMMUNITY", 5000000],
                  ["TEAM", 5000000],
                ]}
                options={{
                  title: "TOTAL SUPPLY 50.000.000 $ORUM",
                  pieHole: 0.4,
                  colors: ["#2b7eca", "#7b91dc", "#b1a6e8", "#dcc0f3"],
                  backgroundColor: "transparent",
                  titleTextStyle: {
                    color: "white",
                    fontSize: "3em",
                  },
                  legendTextStyle: {
                    color: "white",
                  },
                  tooltip: {
                    text: "value",
                    textStyle: {
                      color: "black",
                    },
                    formatter: function (value, index) {
                      var data = [
                        ["IDO", "30.000.000,00"],
                        ["MARKETING", "10.000.000,00"],
                        ["COMMUNITY", "5.000.000,00"],
                        ["TEAM", "5.000.000,00"],
                      ];
                      return data[index][0] + ": " + data[index][1];
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
