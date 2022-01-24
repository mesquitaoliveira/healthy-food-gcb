import JoinImage from "/src/assets/bloco_final_image.svg";
import "./join.css";
import React from 'react'

function join() {
  return (
    <section id="join_member" className="join_member">
      <div className="join_img">
        <img src={JoinImage} alt="" />
      </div>
      <div className="content_join">
        <h2>
          Join our membership <br />
          to get special offer
        </h2>
        <div className="email-box">
          <input type="text" placeholder="Enter your email address" />
          <button type="button">Join</button>
        </div>
      </div>
    </section>
  );
}

export default join;
