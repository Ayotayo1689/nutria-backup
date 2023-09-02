import React, { FC, useEffect, useState } from "react";
import { RegistrationProps, ScreenProps } from "./Registration.types";
import "./registration.styles.scss";

const Introduction: FC<RegistrationProps> = ({ goToNext }: any) => {
  const Screens: ScreenProps[] = [
    {
      render: (
        <p className="first-title">Let us help you set up a suitable plan </p>
      ),
    },
    { render: <p className="second-title">Profile</p> },
  ];

  const [activeScreen, setActiveScreen] = useState<number>(0);

  useEffect(() => {
    if (activeScreen > Screens.length - 1) goToNext();
    const interval = setInterval(() => {
      setActiveScreen(activeScreen + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeScreen, goToNext, Screens.length]);

  return (
    <div className="introduction-screen">
      {Screens.map((screen, i) => (
        <div
          key={i}
          className="introduction-screen__title"
          data-active={activeScreen === i}
        >
          {screen.render}
        </div>
      ))}
    </div>
  );
};

export default Introduction;
