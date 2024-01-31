import React from "react";
import "./Header.css";

import YoutubeIcon from "../../assets/youtube_icon.png";

import { BsList } from "react-icons/bs";
import { IoMdMic } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header__sub">
        <BsList className="header__sub__icon" />
        <div className="header__icon">
          <img src={YoutubeIcon} alt="YouTube"></img>
          <span>YouTube</span>
        </div>
      </div>
      <div className="header__sub__search">
        <div className="header__search">
          <input type="text" placeholder="Search"></input>
          <button>
            <IoIosSearch className="header__search__icon" />
          </button>
        </div>
        <IoMdMic className="header__mic__icon" />
      </div>
      <div className="header__sub">
        <MdOutlineVideoCall className="header__sub__icon" />
        <FaRegBell className="header__sub__icon" />
        <div className="header__profile"></div>
      </div>
    </div>
  );
}

export default Header;
