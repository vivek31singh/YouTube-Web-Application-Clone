<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { IoBagHandle } from "react-icons/io5";
import { PiMusicNoteBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { SiPodcastindex } from "react-icons/si";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { BsTrophy } from "react-icons/bs";
import { PiLightbulb } from "react-icons/pi";
import { GiClothesline } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io5";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { FiFlag } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__sub">
        <Link to="/" className="sidebar__option">
          <GoHomeFill className="sidebar__option__icon" />
          <p>Home</p>
        </Link>
        <div className="sidebar__option">
          <SiYoutubeshorts className="sidebar__option__icon" />
          <p>Shorts</p>
        </div>
        <div className="sidebar__option">
          <MdOutlineSubscriptions className="sidebar__option__icon" />
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="sidebar__sub">
        <div className="sidebar__option">
          <BiSolidVideos className="sidebar__option__icon" />
          <p>You</p>
        </div>
        <div className="sidebar__option">
          <LuHistory className="sidebar__option__icon" />
          <p>History</p>
        </div>
      </div>
      <div className="sidebar__sub">
        <div className="sidebar__option__text">
          <p>Sign in to like videos, comment, and subscribe.</p>
          <Link to="/signin" className="sidebar__signin__btn">
            <FaRegUserCircle className="sidebar__signin__btn__icon" />
            <span>Sign in</span>
          </Link>
        </div>
      </div>
      <div className="sidebar__sub">
        <div className="sidebar__heading">
          <p>Explore</p>
        </div>
        <div className="sidebar__option">
          <BsFire className="sidebar__option__icon" />
          <p>Trending</p>
        </div>
        <div className="sidebar__option">
          <IoBagHandle className="sidebar__option__icon" />
          <p>Shopping</p>
        </div>
        <div className="sidebar__option">
          <PiMusicNoteBold className="sidebar__option__icon" />
          <p>Music</p>
        </div>
        <div className="sidebar__option">
          <BiMovie className="sidebar__option__icon" />
          <p>Movies</p>
        </div>
        <div className="sidebar__option">
          <SiPodcastindex className="sidebar__option__icon" />
          <p>Live</p>
        </div>
        <div className="sidebar__option">
          <SiYoutubegaming className="sidebar__option__icon" />
          <p>Gaming</p>
        </div>
        <div className="sidebar__option">
          <ImNewspaper className="sidebar__option__icon" />
          <p>News</p>
        </div>
        <div className="sidebar__option">
          <BsTrophy className="sidebar__option__icon" />
          <p>Sports</p>
        </div>
        <div className="sidebar__option">
          <PiLightbulb className="sidebar__option__icon" />
          <p>Learning</p>
        </div>
        <div className="sidebar__option">
          <GiClothesline className="sidebar__option__icon" />
          <p>Fashion & Beauty</p>
        </div>
        <div className="sidebar__option">
          <MdPodcasts className="sidebar__option__icon" />
          <p>Podcasts</p>
        </div>
      </div>
      <div className="sidebar__sub">
        <div className="sidebar__option">
          <FiPlusCircle className="sidebar__option__icon" />
          <p>Browse channels</p>
        </div>
      </div>
      <div className="sidebar__sub">
        <div className="sidebar__heading">
          <p>More from YouTube</p>
        </div>
        <div className="sidebar__option">
          <IoLogoYoutube className="sidebar__option__icon__red" />
          <p>YouTube Premium</p>
        </div>
        <div className="sidebar__option">
          <SiYoutubemusic className="sidebar__option__icon__red" />
          <p>YouTube Music</p>
        </div>
        <div className="sidebar__option">
          <TbBrandYoutubeKids className="sidebar__option__icon__red" />
          <p>YouTube Kids</p>
        </div>
      </div>
      <div className="sidebar__sub">
        <div className="sidebar__option">
          <LuSettings className="sidebar__option__icon" />
          <p>Settings</p>
        </div>
        <div className="sidebar__option">
          <FiFlag className="sidebar__option__icon" />
          <p>Report history</p>
        </div>
        <div className="sidebar__option">
          <IoMdHelpCircleOutline className="sidebar__option__icon" />
          <p>Help</p>
        </div>
        <div className="sidebar__option">
          <RiFeedbackLine className="sidebar__option__icon" />
          <p>Feedback</p>
        </div>
      </div>
      <div className="sidebar__sub">
        <div className="sidebar__option__text">
          <div className="sidebar__footer">
            <div className="sidebar__footer__sub">
              <p>About</p>
              <p>Press</p>
              <p>Copyright</p>
              <p>Contact us</p>
              <p>Creators</p>
              <p>Advertise</p>
              <p>Developers</p>
            </div>
            <div className="sidebar__footer__sub">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Policy & Safety</p>
              <p>How YouTube works</p>
              <p>Test new features</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
=======
import React from 'react'
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      Sidebar
    </div>
  )
}

export default Sidebar
>>>>>>> 44ded5cb4c05d0de47004864de4d29129a770d6e
