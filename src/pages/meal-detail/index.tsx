import React, { FC, useEffect } from "react";
import { IMealDetailProps } from "./meal-detail.types";
import "./meal-detail.styles.scss";
import MealDetailInfo from "components/meal-detail-info";
import { cutlery, fish2, flame, pizza } from "assets/svg";
import BackArrow from "components/ui/icons/BackArrow";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";


const myObject = {
  name: 'Bukola',
  profession: 'software engineer'
}

localStorage.setItem('my-object', JSON.stringify(myObject))


const MealDetail: FC<IMealDetailProps> = (props) => {
  const navigate = useNavigate();
  const mealDetailImage = JSON.parse(localStorage.getItem('meal-option') || '{}')

  return (
    <div className="meal__detail-container">
      {/* Meal-Detail image */}
      <div className="meal__detail-image">
        <img className="meal__detail-image-1" alt='meal-detail-image' src={mealDetailImage.imgUrl} />
        <div className="meal__detail-back-button">
          <BackArrow
            onClick={() => navigate(-1)}
            color="white"
            boxSize="24px"
          />
        </div>
      </div>

      {/* Meal-Detail Body */}
      <div className="meal__detail-body">
        <p className="meal__detail-category">Breakfast</p>

        <p className="meal__detail-title">Stirred Fried Pasta</p>

        <p className="meal__detail-description">
          Stir-fried pasta features al dente noodles, a colorful medley of
          vegetables like bell peppers and carrots, savory sauces, and aromatic
          spices for a flavor-packed fusion dish.
        </p>

        <div>
          <p className="meal__detail-textInfo">Information</p>

          <div className="meal__detail-grid">
            <MealDetailInfo imgUrl={flame} info="120k Cal" />
            <MealDetailInfo imgUrl={fish2} info="300g Protein" />
            <MealDetailInfo imgUrl={pizza} info="100g Fats" />
            <MealDetailInfo imgUrl={cutlery} info="500g Carbs" />
          </div>
        </div>
      </div>

      {/* Meal-Detail footer */}
      <div className="meal__detail-footer">
        <button
          onClick={() => navigate(pageRoutes.recipe)}
          className="meal__detail-footer-button"
        >
          View Recipes
        </button>
        <button
          onClick={() => navigate(pageRoutes.restaurantsNearby)}
          className="meal__detail-footer-button"
        >
          Find Restaurants
        </button>
      </div>
    </div>
  );
};

export default MealDetail;
