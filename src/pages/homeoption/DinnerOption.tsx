import React from "react";
import MealHeader from "components/mealheader";
import MealClass from "components/mealclass";

const DinnerOption = () => {
  return (
    <div className="dinner-option">
      <MealHeader title="Lunch" link="/home" />
    </div>
  );
};

export default DinnerOption;
