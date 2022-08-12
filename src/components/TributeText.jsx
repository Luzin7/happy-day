import React from "react";
import "../styles/tributeText/tributeText.css";
import mustache from "../assets/svg/mustache.svg";

import { getRandomText } from "../functions/getRandomText";

function TributeText() {
  return (
    <section className="tribute__text">
      <div className="tribute__content">
        <p className="text">{getRandomText()}</p>
        <img className="tribute__icon" src={mustache} alt="mustache" />
      </div>
    </section>
  );
}

export default TributeText;
