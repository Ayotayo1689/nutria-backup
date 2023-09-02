import MealClass from "components/mealclass";
import MealHeader from "components/mealheader";
import React from "react";

const LunchOption = () => {
  // const [isLoading, setIsLoading] = useState<any>(false);
  // const [response, setResponse] = useState<any>([]);

  // const getData = async () => {
  //   try {
  //     setIsLoading(true);

  //     const data = await axios.post(`${baseUrl}/api/v1/users/register`);
  //     setResponse(data);
  //   } catch {}
  //   {...{ recommendations: data }}
  // };

  return (
    <div className="lunch-option">
      <MealHeader title="Dinner" link="/home" />
    </div>
  );
};

export default LunchOption;
