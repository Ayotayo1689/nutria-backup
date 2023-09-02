import { IMealOption } from "pages/lunch-options/lunch-options.types";
import { FC } from "react";
import './single-meal-option.styles.scss'

const SingleMealOption: FC<Partial<IMealOption>> = (props) => {
  const { name, imgUrl, description } = props;

  return (
    <div title={description} className="single__meal-container">
      {/* Meal Image */}
      <div className="">
        <img className="single__meal-image" src={imgUrl} alt={name} />
      </div>

      {/* Meal Title */}
      <div className="single__meal-title">{name}</div>
    </div>
  );
};


export default SingleMealOption