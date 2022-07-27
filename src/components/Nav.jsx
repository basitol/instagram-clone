import React from "react";
import instagramLogo from "../assets/instagram.png";
import { AiOutlineHeart, AiOutlineCompass } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instagramLogo} alt="logo" />
      </button>
      <input type="tex  t" placeholder="Search" className="search" />
      <span className="nav-links">
        <button>
          <BiHomeAlt />
        </button>
        <button>
          <IoPaperPlaneOutline />
        </button>
        <button>
          <FiPlusSquare />
        </button>
        <button>
          <AiOutlineCompass />
        </button>
        <button>
          <AiOutlineHeart />
        </button>
      </span>
    </nav>
  );
};

export default Nav;
