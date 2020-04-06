import React from "react";
import {Link} from 'react-router-dom'

const Recipes = (props) => (
  <div className="container">
    <div className="row">
      {props.tittle.map((titles, index) => (
        <div className="col-md-4" key={index} style={{ marginBottom: "2rem" }}>
          <div className="recipes__box">
            <img
              className="recipe__box-img"
              src={props.url[index]}
              alt="loading"
            ></img>
            <div className="Recipe__text">
              <h5 className="recipes__title">
                {titles.length < 20 ? `${titles}` : titles.substring(0, 25)}...
              </h5>
              <p className="recipes__subtitle">
                From: Yummly API's<span></span>
              </p>
            </div>
            <br />
            <button className="recipe_buttons"> 
              <Link to={{pathname: `/Recipe/${index}`,state:{recipe: titles}}}>View Recipe</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Recipes;
