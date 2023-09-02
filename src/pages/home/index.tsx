import { BaseInput } from "components";
import React, { FC, useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/svg/search-icon.svg";
import filterIcon from "../../assets/svg/filter-icon.svg";
import notificationIcon from "../../assets/svg/notification-icon.svg";
import Meals from "./Meals";
import "./Home.style.scss";
import foodprops from "../../assets/svg/food-image.svg";
import { mealOptions } from "./constants";

const Home: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const userData = JSON.parse(localStorage.getItem('user') || '{}')

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const timeoutRef = useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setActiveIndex((prevIndex) =>
  //         prevIndex === mealOptions.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     2000
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [activeIndex]);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sliderRef.current?.addEventListener("scroll", (event: any) => {
      const scrollLeft = event?.target?.scrollLeft;
      const scrollWidth = event?.target?.scrollWidth;
      const step = scrollWidth / mealOptions.length + 5;
      const index = scrollLeft / step;

      if (Number.isInteger(index)) setActiveIndex(index);
    });
  }, [sliderRef]);

  const indicators = () =>
    mealOptions.map((_, slideIndex) => (
      <div
        key={slideIndex}
        className={`meal-indicators ${
          activeIndex === slideIndex ? "meal-indicators__active" : ""
        }`}
        onClick={() => setActiveIndex(slideIndex)}
      ></div>
    ));

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__text">
          <div className="home__content__text__intro">
            <div className="home__content__text__intro__greeting">
              <p className="greeting-name">Hello, <strong className="capitalize">{userData.name}</strong></p>
              <p className="greeting-time">Good Morning.</p>
            </div>
            <div className="home__content__text__intro__image">
              <img src={notificationIcon} alt="icon" />
            </div>
          </div>
          <h1 className="home__content__text__header">
            Healthy Lifestyle Transformation!
          </h1>
          <div className="search">
            <BaseInput
              type="search"
              placeholder="Search"
              id="search"
              className="search__input"
              value={search}
            />
            <img src={searchIcon} alt="/icon" className="search__icon search" />
            <img src={filterIcon} alt="icon" className="search__icon filter" />
          </div>
        </div>

        <div className="home__content__day">
          <h2 className="meal__title">Meals for the day</h2>
          <div className="home__content__day__meals" ref={sliderRef}>
            {mealOptions.map((option, index) => (
              <Meals
                className="home__content__day__meals__meal"
                key={index}
                variant={option.variant}
                calories_variant={option.variant}
                name={option.mealTitle}
                sides={option.mealSide}
                time={option.mealType}
                image={foodprops}
                link={option.link}

                // ref={timeoutRef}
              />
            ))}
          </div>

          <div className="home__content__day__indicator">{indicators()}</div>
        </div>

        <div className="home__content__meals">
          {mealOptions.map((option, index) => (
            <Meals
              key={index}
              title={option.header}
              variant={option.variant}
              calories_variant={option.variant}
              name={option.mealTitle}
              sides={option.mealSide}
              time={option.mealType}
              image={foodprops}
              link={option.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
