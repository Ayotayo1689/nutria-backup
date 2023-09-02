import React, {FC} from "react";
import { recommendations } from "./constants";
import heart from "./../../assets/svg/heart.svg";
import "./MealClass.style.scss";
import { IMealOption} from "pages/lunch-options/lunch-options.types";
import SingleMealOption from "components/single-meal-option";

interface IMealClass  {
  data: IMealOption[] | undefined
}

const MealClass:FC<IMealClass> = (props) => {
  const {data} = props

  const midpoint = Math.ceil(recommendations.length / 2);
  const recommendationOne =  data?.slice(0, midpoint);
  const recommendationTwo = data?.slice(midpoint);

  console.log(recommendationTwo)

  
  
  
  return (
    // <div className="meal-class">
    //   <div className="meal-class__content">
    //     <div className="meal-class__content__recommendation">
    //       {recommendationOne?.map((option, i) => (
    //         <div className="meal-class__content__recommendation__meal" key={i}>
    //           <div className="meal-class__content__recommendation__meal__image">
    //             <img src={option?.imgUrl} alt="image" />
    //           </div>
    //           <img src={heart} alt="icon" className="meal-image" />
    //           <div className="meal-class__content__recommendation__title">
    //             <p className="option-title">{option?.imgUrl}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="meal-class__content__recommendation">
    //       {recommendationTwo?.map((option, i) => (
    //         <div className="meal-class__content__recommendation__meal" key={i}>
    //           <div className="meal-class__content__recommendation__meal__image">
    //             <img src={option?.imgUrl} alt="image" />
    //           </div>
    //           <img src={heart} alt="icon" className="meal-image" />
    //           <div className="meal-class__content__recommendation__title">
    //             <p className="option-title">{option?.name}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="meal__class-container">
      <div className="meal__spacing">
        {/* <SingleMealOption name="Cookies" imgUrl="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" /> */}
        {recommendationOne?.map((option, i) => (
          <SingleMealOption name={option.name} imgUrl={option.imgUrl} />
        ) )}
      </div>
      <div className="meal__spacing">
        {recommendationTwo?.map((option, i) => (
          <SingleMealOption name={option.name} imgUrl={option.imgUrl} />
        ) )}
      </div>

    </div>
  );
};

export default MealClass;
