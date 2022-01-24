import Illust from "/src/assets/Illustration.svg";
import Icone from "/src/assets/lupa_icone.svg";
import "./main.css";
import React from "react";
function Main() {
  return (
    <>
    <section id="intro_member" className="intro_member">
      <div className="intro_img">
        <img src={Illust} alt="" />
      </div>
      <div className="content_intro">
        <h1>
          Ready for <br />
          Trying a new
          <br />
          recipe?
        </h1>
        <div className="search-box">
          <input type="text" placeholder="Search healthy recives" />
          <button type="button">
            <img src={Icone} alt="Icone lupa_icone" />
          </button>
        </div>
      </div>
    </section>
    </>
    );
}

export default Main;
