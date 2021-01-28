import { useState, useEffect, useCallback } from "react";
import "../styles/home.css";
import villain from "../assets/img/villain-image.png";

const Home = () => {
  return (
    <div className="home">
      <p className="bg-number no-select">01</p>
      <div className="main">
        <div className="text">
          <h2>hey, i'm nadeen</h2>
          <h3>your friendly neighbourhood programmer</h3>
          <div className="btn-container">
            <div className="work-btn">
              <a className="btn-text" href="#">
                <svg
                  className="btn-outline"
                  width="154"
                  height="54"
                  viewBox="0 0 154 54"
                  fill="none"
                >
                  <rect x="2" y="2" width="150" height="50" rx="10" />
                </svg>
                see my work
              </a>
            </div>
          </div>
        </div>
        <div className="villain-img">
          <img src={villain} alt="" />
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
