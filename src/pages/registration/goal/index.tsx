import { FC, useState } from "react";
import RegistrationLayout from "../RegistrationLayout";
import GoalOption from "components/goal-option";
import goalData from "./goal-data";
import "./goal.styles.scss";
import { useProfile } from "contexts/profile-provider";

const Goal: FC = () => {
  const [activeGoal, setActiveGoal] = useState("");
  const { setProfileData } = useProfile();

  return (
    <RegistrationLayout
      title="What is your goal?"
      description="This is used to set up recommendations just for you"
    >
      <div className="goal__container">
        {goalData.map((goal) => (
          <div
          key={goal.title}
            onClick={() => {
              setProfileData((prevData) => ({
                ...prevData,
                goal: goal.title.toLowerCase(),
              }));
              setActiveGoal(goal.title)
            }}
          >
            <GoalOption 
            isActive={activeGoal === goal.title}
            imgUrl={goal.imgUrl} title={goal.title} />
          </div>
        ))}
      </div>
    </RegistrationLayout>
  );
};

export default Goal;
