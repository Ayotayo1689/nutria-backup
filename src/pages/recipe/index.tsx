import React, { FC } from "react";
import "./recipe.styles.scss";
import { useNavigate } from "react-router-dom";
import BackArrow from "components/ui/icons/BackArrow";
import Ingredient from "components/ingredient";
import meal from "../../assets/images/meal-1.png";
import RecipeStep from "components/recipe-step";
import { Button } from "components";
import { pageRoutes } from "routes/index.routes";

// Recipe page
const Recipe: FC = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Recipe Header */}
      <div className="recipe__header">
        <div className="recipe__header-content">
          {/* Back button */}
          <div className="back__button">
            
          <BackArrow boxSize="22" onClick={() => navigate(-1)} />
          </div>

          {/* Recipe details */}
          <div className="recipe__overview">
            <p className="recipe__overview-text">Stir Fried Spaghetti</p>
            <p className="recipe__overview-serving">2 Servings</p>
            <p className="recipe__overview-chef">by Chef Yhemmie</p>

            {/* recipe footer */}
            <div className="recipe__overview-footer">
              <p>20-30 mins</p>
              <p>120cal</p>
              <p>600</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Body */}
      <div className="recipe__container">
        <p className="recipe__container-title">Ingredients</p>
        <div className="recipe__container-ingredients">
          <Ingredient imgUrl={meal} ingredient="Spaghetti" amount="200g" />
          <Ingredient imgUrl={meal} ingredient="Spaghetti" amount="200g" />
          <Ingredient imgUrl={meal} ingredient="Spaghetti" amount="200g" />
          <Ingredient imgUrl={meal} ingredient="Spaghetti" amount="200g" />
          <Ingredient imgUrl={meal} ingredient="Spaghetti" amount="200g" />
          <Ingredient imgUrl={meal} ingredient="Spaghetti" amount="200g" />
        </div>

        {/* Recipe Steps */}
        <div className="recipe__procedure">
          <p className="recipe__procedure-title">Procedure</p>
          {/* Steps */}
          <div className="">
            <RecipeStep
              step="1"
              detail="Heat a large skillet or wok over medium-high heat. Add vegetable oil and swirl to coat the pan."
            />
            <RecipeStep
              step="2"
              detail="Heat a large skillet or wok over medium-high heat. Add vegetable oil and swirl to coat the pan."
            />
            <RecipeStep
              step="3"
              detail="Heat a large skillet or wok over medium-high heat. Add vegetable oil and swirl to coat the pan."
            />
            <RecipeStep
              step="4"
              detail="Heat a large skillet or wok over medium-high heat. Add vegetable oil and swirl to coat the pan."
            />
            <RecipeStep
              step="5"
              detail="Heat a large skillet or wok over medium-high heat. Add vegetable oil and swirl to coat the pan."
            />
          </div>
        </div>

        <Button onClick={() => navigate(pageRoutes.storesNearby)} className="recipe__button" variant="primary">Find grocery stores</Button>
      </div>
    </>
  );
};

export default Recipe;
