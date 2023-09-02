import React, { FC } from "react";
import { IOnboardingSlideProps } from "./onboarding-slide.types";
import "./onboarding.styles.scss";

// Onboarding Slide Carousel Component
const OnboardingSlide: FC<IOnboardingSlideProps> = (props) => {
  const { image, title, description } = props;

  return (
    <div className="onboarding_layout">
      {/* Image */}
      <div className="silde__image-container">
        <img className="slide__image" src={image} alt="onboarding-image" />
      </div>

      {/* Onboarding Text */}
      <div className="slide_detail-container">
        {/* Slide detail */}
        <div className="slide_detail">
          <h2 className="slide_detail-title">{title}</h2>
          <p className="slide_detail-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlide;
