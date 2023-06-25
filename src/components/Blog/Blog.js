import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3001/blog";

function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setBlogData(res.data.blogData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row items">
          {blogData.map((item, idx) => {
            return (
              <div key={`bd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                {/* Single Blog */}
                <div className="card blog-card">
                  {/* Blog Thumb */}
                  <div className="blog-thumb">
                    <Link to="/blog-single">
                      <img src={item.img} alt={item.title} />
                    </Link>
                  </div>
                  {/* Blog Content */}
                  <div className="blog-content">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex justify-content-between list-unstyled mt-4">
                      <li>
                        By <Link to="/blog-single">{item.author}</Link>
                      </li>
                      <li>
                        <Link to="/blog-single">{item.date}</Link>
                      </li>
                    </ul>
                    {/* Blog Title */}
                    <Link to="/blog-single">
                      <h4>{item.title}</h4>
                    </Link>
                    <p>{item.content}</p>
                    {/* Blog Button */}
                    <Link className="btn content-btn" to="/blog-single">
                      {item.btnText}
                    </Link>
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

export default Blog;