import React from "react";
import "../styles/home/home.css";

import blob from "../assets/svg/blob.svg";
import faceJoy from "../assets/svg/faceJoy.svg";
import starFace from "../assets/svg/starFace.svg";
import heartEyes from "../assets/svg/heartEyes.svg";
import faceWithTongue from "../assets/svg/faceWithTongue.svg";
import emojiParty from "../assets/svg/emojiParty.svg";
import emojiParty2 from "../assets/svg/emojiParty2.svg";

function Home() {
  // add animations on scroll
  window.addEventListener("scroll", () => {
    // getting images and icons
    const img = document.querySelector(".blob");
    const e1 = document.querySelector(".e1");
    const e2 = document.querySelector(".e2");
    const e3 = document.querySelector(".e3");
    const e4 = document.querySelector(".e4");
    const e5 = document.querySelector(".e5");
    const e6 = document.querySelector(".e6");
    const tributeName = document.querySelector("#tribute__name");
    // get scroll value
    let value = window.scrollY;
    // add value at styles to make the animations
    img.style.rotate = value / 50 + "deg";
    e1.style.top = 20 - value / 50 + "%";
    e2.style.top = 60 - value / 100 + "%";
    e3.style.top = 10 - value / 20 + "%";
    e4.style.bottom = 10 + value / 150 + "%";
    e5.style.right = 35 - value / 40 + "%";
    e5.style.opacity = value / 2 + "%";
    e6.style.left = 35 - value / 40 + "%";
    e6.style.opacity = value / 2 + "%";
    tributeName.style.top = 1 - value / 4000 + "em";
  });
  return (
    <section className="banner__tribute">
      <div className="banner__content">
        <div className="content__title">
          <h1 className="title-text" id="tribute__name">
            Pais!
          </h1>
          <p className="title-text">Feliz dia dos</p>
        </div>
        <img className="blob" src={blob} alt="blob" />
        <div className="icons">
          <img className="emoji e1" src={faceJoy} alt="face Joy" />
          <img className="emoji e2" src={starFace} alt="Face with star eyes" />
          <img
            className="emoji e3"
            src={heartEyes}
            alt="Face with heart eyes"
          />
          <img
            className="emoji e4"
            src={faceWithTongue}
            alt="face With Tongue"
          />
          <img className="emoji e5" src={emojiParty} alt="party emoji" />
          <img className="emoji e6" src={emojiParty2} alt="party emoji" />
        </div>
      </div>
    </section>
  );
}

export default Home;
