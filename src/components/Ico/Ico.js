import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ico() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/cta`)
      .then(res => {
        setData(res.data[0]);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <section className="cta-area p-0">
      <div className="container">
        <div className="row">
          <div className="col-12 card">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-5 text-center">
                <img src={data.img} alt="" />
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <h2 className="m-0">{data.title}</h2>
                <p>{data.content}</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ico;