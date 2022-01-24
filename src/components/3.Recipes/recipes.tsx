import "./recipes.css";
import React from "react";
import Data from "../../data/recipes.json";

function recipes() {
  return (
    <div className="our__recipes">
      <h2>Our Best Recipes</h2>
      <p>
        Far far away, behind the word mountains, far from the countries
        <br />
        Vakalia and Consonantia, there live blind texts.
      </p>
      <div className="cards_best_recipes">
        {Data.map((about) => {
          const { id, ImagemComida, Titulo_do_Produto } = about;
          return (
            <div id="container" key={id}>
              <div className="product-title">
                <h3>{Titulo_do_Produto}</h3>
                <div className="control">
                  <button className="btn">
                    <a className="see__recipe">See Recipe</a>
                  </button>
                </div>
              </div>
              <div className="product-image">
                <img src={ImagemComida} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default recipes;
