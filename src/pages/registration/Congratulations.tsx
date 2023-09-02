import React, { FC } from "react";
import { RegistrationProps } from "./Registration.types";
import "./registration.styles.scss";
import { Button } from "components";
import congrats from "../../assets/svg/congrats.svg";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";

const Congratulations: FC<RegistrationProps> = () => {
  const navigate = useNavigate()
  return (
    <div className="congratulations">
      <img className="congratulations__image" src={congrats} alt="" />
      <h1 className="congratulations__title">Congratulations</h1>
      <p className="congratulations__description">
        Your profile has been set up successfully
      </p>
      <Button 
      onClick={() => navigate(pageRoutes.home)}
      className="congratulations__button" variant="primary">
        Let's Go
      </Button>
    </div>
  );
};

export default Congratulations;
