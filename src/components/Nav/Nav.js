import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NetFlixLogo from "../../images/NetFlixLogo.png";
import NetflixAvatar from "../../images/NetflixAvatar.png";
import "./Nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);

  const NavBarVisibility = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavBarVisibility);

    return () => {
      window.removeEventListener("scroll", NavBarVisibility);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <Link to="/">
        <img src={NetFlixLogo} className="nav-logo" alt="logo" />
        <img src={NetflixAvatar} className="nav-avatar" alt="logo" />
      </Link>
    </div>
  );
};

export default Nav;
