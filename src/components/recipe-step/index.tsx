import React, { FC } from "react";
import { IRecipeStepProps } from "./recipe-step.types";
import "./recipe-step.styles.scss";

const RecipeStep: FC<IRecipeStepProps> = (props) => {
  const { step, detail } = props;
  return (
    <div className="recipe__step">
      <p className="recipe__step-title">Step {step}</p>

      {/* detail */}
      <p>{detail}</p>
    </div>
  );
};

export default RecipeStep;
