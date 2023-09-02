import React, { FC } from "react";
import { IMealHeaderProps } from "./MealHeader.type";
import backarrow from "./../../assets/svg/backarrow.svg";
import notificationIcon from "./../../assets/svg/notification-icon.svg";
import "./MealHeader.style.scss";
import { useNavigate } from "react-router-dom";

const MealHeader: FC<IMealHeaderProps> = (props) => {
  const { link, title } = props;
  const navigate = useNavigate()
  return (
    <div className="meal-header">
      <div className="meal-header__content">
        <div className="meal-header__content__description">
          <div className="meal-header__content__description__type">
            <div onClick={() => navigate(-1)}>
              <img src={backarrow} alt="icon" />
            </div>
            <p className="content-title">{title}</p>
          </div>
          <div className="content-notification">
            <img src={notificationIcon} alt="icon" />
          </div>
        </div>
        <p className="content-recommendation">Recommendations</p>
      </div>
    </div>
  );
};

export default MealHeader;
