import CustomBackground from "components/ui/custombackground/CustomBackground";
import React, { FC } from "react";
import "./Home.style.scss";
import { Link } from "react-router-dom";

export type MealsProps = {
  className?: string;
  title?: string;
  variant: string;
  calories_variant: string;
  name: string;
  sides: string;
  time: string;
  image: string;
  link: string;
};

const Meals: FC<MealsProps> = ({
  className,
  title,
  variant,
  calories_variant,
  name,
  sides,
  time,
  image,
  link,
}) => {
  return (
    <div className={`meal ${className}`}>
      <h2 className="meal__title">{title}</h2>

      <Link to={link}>
        <CustomBackground variant={variant}>
          <div className={`meal__calories--${calories_variant}`}>
            <p className="meal__calories__text">300</p>
            <p className="meal__calories__span">cal</p>
          </div>
          <div className="meal__option">
            <div className="meal__option__title">
              <p className="meal__option__title__name">{name}</p>
              <p className="meal__option__title__sides">{sides}</p>
            </div>
            <p className="meal__option__time">{time}</p>
          </div>
          <img src={image} alt="food" className="meal__image" />
        </CustomBackground>
      </Link>
    </div>
  );
};

export default Meals;
