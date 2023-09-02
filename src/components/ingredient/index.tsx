import React, { FC } from "react";
import { IngredientProps } from "./ingredient.types";
import './ingredient.styles.scss'

// Ingredient Component
const Ingredient: FC<IngredientProps> = (props) => {
  const { imgUrl, ingredient, amount } = props;
  return (
    <div className="ingredient__detail">
      {/* Ingredient title */}
      <div className="ingredient__detail-left">
        <img className="ingredient__detail-image" src={imgUrl} alt="ingredient-image" />
        <p>{ingredient}</p>
      </div>

      {/* Ingredient amount */}
      <p>200g</p>
    </div>
  );
};

export default Ingredient;
