  http://localhost:3001/project
  http://localhost:3001/content
  http://localhost:3001/staking
  http://localhost:3001/farming
  http://localhost:3001/leaderboard
  http://localhost:3001/tokenomics
  http://localhost:3001/tier
  http://localhost:3001/wallet
  http://localhost:3001/work
  http://localhost:3001/cta
  http://localhost:3001/help
  http://localhost:3001/social
  http://localhost:3001/footer
  http://localhost:3001/blog
  http://localhost:3001/single
  http://localhost:3001/sidebar

  REACT_APP_BASE_URL=https://my-json-server.typicode.com/themeland/gameon-json













  import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Chart, ArcElement, CategoryScale, PieController, Tooltip } from 'chart.js';

Chart.register(PieController, ArcElement, CategoryScale, Tooltip);

function Content() {
  const chartRef = useRef(null);
  const [data, setData] = useState({});
  const [contentData, setContentData] = useState([]);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/content`)
      .then((res) => {
        setData(res.data[0]);
        setContentData(res.data[0].contentData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (JSON.stringify(contentData) !== JSON.stringify([])) {
      if (chart) {
        console.log('Destroying old chart...');
        chart.destroy();
        setChart(null);
      }

      if (chartRef.current && !chart) {
        const myChartRef = chartRef.current.getContext('2d');
        console.log('Creating new chart...');
        const chartInstance = new Chart(myChartRef, {
          type: 'pie',
          data: {
            labels: ['IDO', 'Marketing', 'Community', 'Team'],
            datasets: [
              {
                data: [60, 20, 10, 10],
                backgroundColor: ['rgb(43,126,202)', 'rgb(123,145,220)', 'rgb(177,166,232)', 'rgb(220,192,243)'],
              },
            ],
          },
        });
        console.log('New chart created.');
        setChart(chartInstance);
      } else {
        console.log('Chart not created. ChartRef:', chartRef.current, 'Chart:', chart);
      }
    }
  }, [contentData, chart]);

  useEffect(() => {
    return () => {
      if (chart) {
        chart.destroy();
      }
    }
  }, [chart]);

  return (
    <section className="content-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="content intro">
              <span className="intro-text">{data.sub_heading}</span>
              <h2>{data.heading}</h2>
              <p>{data.excerpt}</p>
              <ul className="list-unstyled items mt-5">
                {contentData.map((item, idx) => (
                  <li key={`cd_${idx}`} className="item">
                    <div className="content-list d-flex align-items-center">
                      <div className="content-icon">
                        <span className={item.featured}>
                          <i className={item.icon} />
                        </span>
                      </div>
                      <div className="content-body ml-4">
                        <h3 className="m-0">{item.title}</h3>
                        <p className="mt-3">{item.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <canvas ref={chartRef} width="300" height="300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;










import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Chart, ArcElement, CategoryScale, PieController, Tooltip } from 'chart.js';

Chart.register(PieController, ArcElement, CategoryScale, Tooltip);

function Content() {
  const chartRef = useRef(null);
  const [data, setData] = useState(null);
  const [contentData, setContentData] = useState(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/content`)
      .then((res) => {
        setData(res.data[0]);
        setContentData(res.data[0].contentData);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log('Content data loaded.'));
  }, []);

  useEffect(() => {
    if (contentData) {
      if (chart) {
        console.log('Destroying old chart...');
        chart.destroy();
        setChart(null);
      }

      if (chartRef?.current && !chart) {
        const myChartRef = chartRef.current.getContext('3d');
        console.log('Creating new chart...');
        const chartInstance = new Chart(myChartRef, {
          type: 'pie',
          data: {
            labels: ['IDO', 'Marketing', 'Community', 'Team'],
            datasets: [
              {
                data: [60, 20, 10, 10],
                backgroundColor: ['rgb(43,126,202)', 'rgb(123,145,220)', 'rgb(177,166,232)', 'rgb(220,192,243)'],
              },
            ],
          },
        });
        console.log('New chart created.');
        setChart(chartInstance);
      } else {
        console.log('Chart not created. ChartRef:', chartRef?.current, 'Chart:', chart);
      }
    }
  }, [contentData, chart, chartRef]);

  useEffect(() => {
    return () => {
      if (chart) {
        chart.destroy();
      }
    }
  }, [chart]);

  if (!data || !contentData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="content-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <div className="content intro">
              <span className="intro-text">
                {data.sub_heading}
              </span>
              <h2>
                {data.heading}
              </h2>
              <p>
                {data.excerpt}
              </p>
              <ul className="list-unstyled items mt-5">
                {contentData.map((item, idx) => (
                  <li key={`cd_${idx}`} className="item">
                    <div className="content-list d-flex align-items-center">
                      <div className="content-icon">
                        <span className={item.featured}>
                          <i className={item.icon} />
                        </span>
                      </div>
                      <div className="content-body ml-4">
                        <h3 className="m-0">{item.title}</h3>
                        <p className="mt-3">{item.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <canvas ref={chartRef} style={{ width: '100%' }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;