import  { useState,  useEffect } from "react";
import "./lunch-options.styles.scss";
import axios from "axios";
import { baseUrl } from "config/api";
import { useQuery } from "react-query";
import { IMealOption } from "./lunch-options.types";
import { shuffleArray } from "utils/shuffleArray";
import SingleMealOption from "components/single-meal-option";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";

const lunchUrl = `${baseUrl}/meal-suggestion`;

const LunchOption = () => {
  const [lunchOptions, setLunchOptions] = useState<IMealOption[]>();
  const navigate = useNavigate()

  const getLunchOptions = async () => {
    try {
      const response = await axios.get(lunchUrl);
      const data = await response.data.data.mealLists;

      const shuffleData = shuffleArray(data);
      setLunchOptions(shuffleData);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery("lunchUrl", getLunchOptions, { suspense: true });

  useEffect(() => {
    setLunchOptions(data);
  }, [data]);

  const handleSelectMeal = (option: IMealOption) => {
    localStorage.setItem('meal-option', JSON.stringify(option))
    navigate(pageRoutes.mealDetail)
  };

  return (
    <div className="lunch__options-container">
      <div className="">
      {lunchOptions?.slice(0, Math.floor(lunchOptions.length/2)).map((option) => (
        <div className="single__mealOption-container" key={option.id} onClick={() => handleSelectMeal(option)}>
          <SingleMealOption
            name={option.majorTitle}
            imgUrl={option.imgUrl}
            description={option.description}
            />
        </div>
      ))}
      </div>

      <div className="">
      {lunchOptions?.slice(Math.floor(lunchOptions.length/2)).map((option) => (
        <div className="single__mealOption-container" key={option.id} onClick={() => handleSelectMeal(option)}>
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

export default LunchOption;
