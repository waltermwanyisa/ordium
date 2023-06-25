import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = "http://localhost:3001/tokenomics";

function Tokenomics() {
  const [data, setData] = useState({});
  const [tokenomicsData, setTokenomicsData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setData(res.data);
        setTokenomicsData(res.data.tokenomicsData);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <section className="leaderboard-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table token-content table-borderless">
                <thead>
                  <tr>
                    <th scope="col">{data.heading_1}</th>
                    <th scope="col">{data.heading_2}</th>
                    <th scope="col">{data.heading_3}</th>
                    <th scope="col">{data.heading_4}</th>
                    <th scope="col">{data.heading_5}</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenomicsData.map((item, idx) => {
                    return (
                      <tr key={`tokd_${idx}`}>
                        <td>{item.category}</td>
                        <td>{item.allocation}</td>
                        <td>{item.raise}</td>
                        <td>{item.locked}</td>
                        <td>{item.vesting}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <nav>
              <ul className="page-numbers">
                <li><Link className="page-numbers" to="#">1</Link></li>
                <li><span aria-current="page" className="page-numbers current">2</span></li>
                <li><span className="page-numbers dots">…</span></li>
                <li><Link className="page-numbers" to="#">4</Link></li>
                <li><Link className="next page-numbers" to="#"><i className="icon-arrow-right" /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;