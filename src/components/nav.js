import { useState, useEffect, useCallback } from "react";
import "../styles/nav.css";

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [navVisible, setNavVisible] = useState(window.pageYOffset);

  const handleScroll = useCallback(() => {
    const nav = document.querySelector("nav");
    const prevScrollpos = navVisible;
    const currentScrollpos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollpos;

    if (!hamburger) {
      visible ? nav.classList.remove("nav__hidden") : nav.classList.add("nav__hidden");
    }

    setNavVisible(currentScrollpos);
  }, [navVisible, hamburger]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleHamburger = () => {
    setHamburger(!hamburger);

    const menu = document.querySelector(".menu");
    hamburger ? menu.classList.remove("open") : menu.classList.add("open");
  };

  return (
    <nav>
      <div className="logo">
        <a className="no-select" href="#">
          <svg className="logo-outline" width="54" height="54" viewBox="0 0 54 54" fill="none">
            <rect x="2" y="2" width="50" height="50" rx="10" />
          </svg>
          nm
        </a>
      </div>
      <div className="hamburger" onClick={() => handleHamburger()}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="menu">
        <li>
          <a className="no-select" href="#">
            home
          </a>
        </li>
        <li>
          <a className="no-select" href="#">
            about
          </a>
        </li>
        <li>
          <a className="no-select" href="#">
            projects
          </a>
        </li>
        <li>
          <a href="#" className="contact-btn no-select">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
