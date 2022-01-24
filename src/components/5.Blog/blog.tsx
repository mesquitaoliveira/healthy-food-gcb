import Data from "../../data/blog.json";
import React from 'react'
import "./blog.css";
function blog() {
  return (
    <div className="blog__section">
      <h2>Read Our Blog</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        <br /> and Consonantia, there live the blind texts.
      </p>
      <div className="blog_post">
        {Data.map((container) => {
          const { ImagemPost, post_title, profile_image, profile_name } =
            container;
          return (
            <div id="bg_container" key={ImagemPost}>
              <div className="post_image">
                <img src={ImagemPost} alt="" />
              </div>
              <div className="post_title">
                <h3>{post_title}</h3>
                <div className="profile">
                  <div className="image_box">
                    <img src={profile_image} alt="Perfil Pessoa" />
                  </div>
                  <span>{profile_name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*<div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="./src/assets/arrow.svg" alt="scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="./src/assets/arrow.svg" alt="scroll Right" />
        </button>
      </div>*/}
      <div />
    </div>
  );
}
export default blog;
