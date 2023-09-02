import React, { FC } from "react";
import { IGoalOptionProps } from "./goal-option.types";
import './goal-option.styles.scss'

const GoalOption: FC<IGoalOptionProps> = (props) => {
  const { title, imgUrl, isActive } = props;
  return (
    <div className={`goal__option-container ${isActive ? 'goal__option-active' : ''}`}>
      <img className="goal__option-image" src={imgUrl} alt="goal-option" />
      <p className="goal__option-text">{title}</p>
    </div>
  );
};

export default GoalOption;
