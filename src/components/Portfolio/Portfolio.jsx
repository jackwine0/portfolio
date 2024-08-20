import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio-container">
      <div className="header">
        <h2>MY PORTFOLIO</h2>
      </div>
      <div className="card-grid">
        <div className="card">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1723861455/38bf1e17-1ed2-41f3-a511-5b9a092821a3_dqxvd8.gif"
            alt="Project 1"
            title="SleekTV "
          />
          <div className="card-actions">
            <a href="https://sleek-tv.vercel.app/">
              <button>VIEW LIVE</button>
            </a>
            <a href="https://github.com/jackwine0/Sleek-TV.git">
              <button>VIEW CODE</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1723861453/F5_Quotes_Janet_Iwasa_dsf9oz.gif"
            alt="Project 2"
            title="SureBanker"
          />
          <div className="card-actions">
          <a href="https://sure-bank.vercel.app/">
              <button>VIEW LIVE</button>
            </a>
            <a href="https://github.com/jackwine0/Sure-B.git">
              <button>VIEW CODE</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1723834166/2412bf30-b954-487b-9845-578bca25c633_hrnq4z.gif"
            alt="Project 3"
            title="Funiro Ecom Store"
          />
          <div className="card-actions">
          <a href="https://hardmod.vercel.app/">
              <button>VIEW LIVE</button>
            </a>
            <a href="https://github.com/jackwine0/hardmod.git">
              <button>VIEW CODE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
