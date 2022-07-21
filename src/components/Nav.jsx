import React from "react";
import instagramLogo from "../assets/instagram.png";
import { FaHome, FaCommentAlt, FaCompass, FaHeart } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instagramLogo} alt="logo" />
      </button>
      <input type="text" placeholder="Search" className="search" />
      <span className="nav-links">
        <button>
          <FaHome />
        </button>
        <button>
          <FaCommentAlt />
        </button>
        <button>
          <FaCompass />
        </button>
        <button>
          <FaHeart />
        </button>
      </span>
    </nav>
  );
};

export default Nav;
