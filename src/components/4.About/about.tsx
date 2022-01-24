import "./about.css";
import React from "react";
import AboutImage from "/src/assets/bloco_services.svg";

function about() {
  return (
    <section className="about_section">
      <div className="about_img">
        <img src={AboutImage} alt="" />
      </div>
      <div className="content_about">
        <h2>The best services ready To serve you</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="button">
          <a href="#">Know More</a>
        </div>
      </div>
    </section>
  );
}

export default about;
