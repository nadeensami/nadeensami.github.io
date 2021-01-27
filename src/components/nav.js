import React, { useState } from "react";
import "../styles/nav.css";

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);

    const menu = document.querySelector(".menu");
    hamburger ? menu.classList.remove("open") : menu.classList.add("open");
  };

  return (
    <nav>
      <div className="logo">nm</div>
      <div className="hamburger" onClick={() => handleHamburger()}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="menu">
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">resume</a>
        </li>
        <li>
          <a href="#" className="contact-btn">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
