import { FC, useState } from "react";
import "../onboarding-page/onboarding-page.styles.scss";
import OnboardingSlide from "components/onboarding-slide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import onboardingSlideData from "components/onboarding-slide/onboarding-slides";
import DotIcon from "components/dot-icon";
import { Link } from "react-router-dom";
import { authRoutes } from "routes/index.routes";

const OnboardingPage: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const endOfSlide = activeSlide === 2;

  const handleNext = () => {
    if (activeSlide >= 2) return;
    setActiveSlide((prev) => prev + 1);
  };

  const dotArray = Array(3).fill(null);

  return (
    <div className="carousel__container">
      <div>
        <OnboardingSlide
          activeSlide={activeSlide}
          image={onboardingSlideData[activeSlide].image}
          title={onboardingSlideData[activeSlide].title}
          description={onboardingSlideData[activeSlide].description}
        />
      </div>

      <div className="carousel__navigation">
        <div className="active__dots">
          {dotArray.map((_, i) => (
            <DotIcon
              key={`icon-${i}`}
              setActiveSlide={setActiveSlide}
              index={i}
              active={i === activeSlide}
            />
          ))}
        </div>

        <div>
          {endOfSlide ? (
            <Link
              onClick={() => {
                localStorage.setItem("onboarding", "true");
              }}
              to={authRoutes.signUp}
            >
              <button className="get__started-button">Get Started</button>
            </Link>
          ) : (
            <button className="next__button" onClick={handleNext}>
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="30.5538"
                  cy="29.8769"
                  rx="24.2461"
                  ry="24.2461"
                  fill="#31A14B"
                />
                <path
                  d="M23.9386 0C19.399 0.975773 15.1443 2.98154 11.5029 5.86249C7.86152 8.74345 4.93075 12.4226 2.9368 16.6159C0.942853 20.8092 -0.0609497 25.4046 0.00286266 30.0474C0.066675 34.6902 1.1964 39.2563 3.30484 43.3932L6.62556 41.7008C4.77641 38.0726 3.78562 34.068 3.72965 29.9962C3.67369 25.9243 4.55405 21.8941 6.30278 18.2164C8.05152 14.5388 10.6219 11.3121 13.8155 8.78545C17.0091 6.25879 20.7405 4.49969 24.7218 3.64391L23.9386 0Z"
                  fill="#31A14B"
                />
                <path
                  d="M24.4819 29.8769H37.6153M31.5537 22.8051L38.6255 29.8769L31.5537 36.9487"
                  stroke="white"
                  strokeWidth="1.51538"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
