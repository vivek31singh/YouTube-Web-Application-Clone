<<<<<<< HEAD
import React from "react";
import "./Home.css";

import thumbnail1 from "../../assets/Thumbnails/thumbnail1.jpg";
import thumbnail2 from "../../assets/Thumbnails/thumbnail2.jpg";
import thumbnail3 from "../../assets/Thumbnails/thumbnail3.jpg";
import thumbnail4 from "../../assets/Thumbnails/thumbnail4.jpg";
import thumbnail5 from "../../assets/Thumbnails/thumbnail5.jpg";
import thumbnail6 from "../../assets/Thumbnails/thumbnail6.jpg";
import thumbnail7 from "../../assets/Thumbnails/thumbnail7.jpg";
import thumbnail8 from "../../assets/Thumbnails/thumbnail8.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__sub">
        <div className="home__header">
          <div className="home__header__option">
            <p>All</p>
          </div>
          <div className="home__header__option">
            <p>Music</p>
          </div>
          <div className="home__header__option">
            <p>Indian pop music</p>
          </div>
          <div className="home__header__option">
            <p>Gaming</p>
          </div>
          <div className="home__header__option">
            <p>Karan Aujla</p>
          </div>
          <div className="home__header__option">
            <p>Website</p>
          </div>
          <div className="home__header__option">
            <p>Computer Science</p>
          </div>
          <div className="home__header__option">
            <p>Digital video recorders</p>
          </div>
          <div className="home__header__option">
            <p>Live</p>
          </div>
          <div className="home__header__option">
            <p>Adbobe Photoshop</p>
          </div>
          <div className="home__header__option">
            <p>News</p>
          </div>
          <div className="home__header__option">
            <p>Video editing software</p>
          </div>
          <div className="home__header__option">
            <p>3D modeling</p>
          </div>
          <div className="home__header__option">
            <p>Stocks</p>
          </div>
          <div className="home__header__option">
            <p>Cars</p>
          </div>
          <div className="home__header__option">
            <p>Live</p>
          </div>
          <div className="home__header__option">
            <p>Jukebox</p>
          </div>
          <div className="home__header__option">
            <p>Gadgets</p>
          </div>
          <div className="home__header__option">
            <p>Recently uploaded</p>
          </div>
          <div className="home__header__option">
            <p>Watched</p>
          </div>
        </div>
        <div className="home__main">
          <div className="home__videos">
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail1} alt="thumbnail1"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>
                    From Figma to a 3D Web Page with Dora Plugin - No code
                    Tutorial
                  </h4>
                  <p>Minh Pham</p>
                  <span>
                    <p>890k views</p>
                    <p>.</p>
                    <p>7 months ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail2} alt="thumbnail1"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>
                    Convert a 2D image to a perfect 3D character model - Is it
                    really AI?
                  </h4>
                  <p>Minh Pham</p>
                  <span>
                    <p>564k views</p>
                    <p>.</p>
                    <p>8 months ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail3} alt="thumbnail1"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>Stunning HTML & CSS Card Animation Stock Wawes</h4>
                  <p>Web UI Tutorials</p>
                  <span>
                    <p>168k views</p>
                    <p>.</p>
                    <p>7 months ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail4} alt="thumbnail1"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>HTML and CSS Project Tutorial: Pure CSS Image Slider</h4>
                  <p>Skillthrive</p>
                  <span>
                    <p>185k views</p>
                    <p>.</p>
                    <p>1 year ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail5} alt="thumbnail1"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>How to create 3D Website Designs With No Code</h4>
                  <p>Codex Community</p>
                  <span>
                    <p>283k views</p>
                    <p>.</p>
                    <p>5 months ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail6} alt="thumbnail6"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>I Created A Mobile App Using These Simple Tools!</h4>
                  <p>Simon Grimm</p>
                  <span>
                    <p>386k views</p>
                    <p>.</p>
                    <p>8 months ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail7} alt="thumbnail6"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>
                    AI08: Midjourney Vector Design Workflow in Figma and
                    Illustrator
                  </h4>
                  <p>CJ Gammon</p>
                  <span>
                    <p>5.2k views</p>
                    <p>.</p>
                    <p>8 months ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="home__video">
              <div className="home__video__thumbnail">
                <img src={thumbnail8} alt="thumbnail6"></img>
              </div>
              <div className="home__video__footer">
                <div className="home__video__footer__left">
                  <div className="home__video__footer__left-profile"></div>
                </div>
                <div className="home__video__footer__right">
                  <h4>
                    Bird App UI design - Figma Tutorial 🤯🚀 Music Application
                  </h4>
                  <p>CreativeZaiid</p>
                  <span>
                    <p>525 views</p>
                    <p>.</p>
                    <p>9 days ago</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home__shorts"></div>
          <div className="home__videos"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
=======
import React from 'react'
import './Home.css';

function Home() {
  return (
    <div className='home'>
      Home
    </div>
  )
}

export default Home
>>>>>>> 44ded5cb4c05d0de47004864de4d29129a770d6e
