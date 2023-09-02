import axios from "axios";
import SingleMealOption from "components/single-meal-option";
import { baseUrl } from "config/api";
import { IMealOption } from "pages/lunch-options/lunch-options.types";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";
import { shuffleArray } from "utils/shuffleArray";
import './breakfast-options.styles.scss'

const breakfastUrl = `${baseUrl}/meal-suggestion`;

const BreakfastOption = () => {
  const [breakfastOption, setBreakfastOption] = useState<IMealOption[]>();
  const navigate = useNavigate();

  const getBreakfastOption = async () => {
    try {
      const response = await axios.get(breakfastUrl);
      const data = await response.data.data.mealLists;

      const shuffleData = shuffleArray(data);
      setBreakfastOption(shuffleData);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery("lunchUrl", getBreakfastOption, { suspense: true });

  useEffect(() => {
    setBreakfastOption(data);
  }, [data]);

  const handleSelectMeal = (option: IMealOption) => {
    localStorage.setItem('meal-option', JSON.stringify(option))
    navigate(pageRoutes.mealDetail)
  };

  return (
    <div className="breakfast__options-container">
      {/* grid left */}
      <div>
        {breakfastOption?.slice(0, Math.floor(breakfastOption.length/2)).map((option) => (
          <div 
          onClick={() => handleSelectMeal(option)}
          key={option.id} 
          className="single__mealOption-container"
          >
            <SingleMealOption 
            name={option.majorTitle}
            imgUrl={option.imgUrl}
            description={option.description}
            />
          </div>
        ))}
      </div>

      {/* grid right */}
      <div>
        {breakfastOption?.slice(Math.floor(breakfastOption.length/2)).map((option) => (
          <div 
          onClick={() => handleSelectMeal(option)}
          key={option.id} 
          className=""
          >
            <SingleMealOption 
            name={option.majorTitle}
            imgUrl={option.imgUrl}
            description={option.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakfastOption;
