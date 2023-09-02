import { BaseInput } from "components";
import React, { FC } from "react";
import search from "../../assets/svg/search icon.svg";
import filterIcon from "../../assets/svg/filter-icon.svg";

const Dashboard: FC = () => {
  return (
    <div>
      <div className="home__content">
        <div className="home__content__text">
          <div className="home__content__text__intro">
            <p>Hello Gbolaga,</p>
            <p>Good Morning.</p>
            <div className="home__content__text__intro__image">
              <img src="" alt="" />
            </div>
          </div>
          <h1>Healthy Lifestyle Transformation!</h1>
          <img src={search} alt="/icon" />
          <BaseInput type="search" placeholder="Search" id="search" />
          <img src={filterIcon} alt="icon" />
        </div>
        <h2>Meals for the day</h2>
      </div>
    </div>
  );
};

export default Dashboard;
