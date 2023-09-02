import React, { useState } from "react";
import Gender from "./gender";
import Age from "./age";
import Height from "./height";
import Preference from "./preferences";
import Goal from "./goal";
import Congratulations from "./Congratulations";
import Introduction from "./Introduction";
import Weight from "./weight";
import ArrowBack from "components/ui/arrowbutton/ArrowBack";
import ArrowForward from "components/ui/arrowbutton/ArrowForward";
import { Button } from "components";
import { useProfile } from "contexts/profile-provider";
import axios from "axios";
import { baseUrl } from "config/api";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";

const mainFlow = [
  {
    key: "gender",
    Component: Gender,
  },
  {
    key: "age",
    Component: Age,
  },
  {
    key: "weight",
    Component: Weight,
  },
  {
    key: "height",
    Component: Height,
  },
  {
    key: "preference",
    Component: Preference,
  },

  {
    key: "goal",
    Component: Goal,
  },
];

const registrationFlow = [
  {
    key: "intro",
    Component: Introduction,
  },
  ...mainFlow,
  {
    key: "congrats",
    Component: Congratulations,
  },
];

const Registration = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const activeScreen = registrationFlow[activeScreenIndex];
  const { profileData } = useProfile();
  const bearerToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleProfileRegistration = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/registration`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      enqueueSnackbar({
        message: response.data.message,
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 2000,
      });
      goToNext();
      navigate(pageRoutes.home);
    } catch (err: any) {
      enqueueSnackbar({
        message: err?.response?.data?.error,
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 7000,
      });
      console.log(err);
    }
  };

  const goToNext = () => {
    setActiveScreenIndex((prev) => prev + 1);
  };
  const goBack = () => {
    setActiveScreenIndex((prev) => prev - 1);
  };

  const hideNavigationBtn = ["intro", "congrats"].includes(activeScreen.key);
  const indicators = () =>
    mainFlow.map((_, index) => (
      <div
        key={index}
        className={`indicators-container__indicators ${
          registrationFlow.findIndex((s) => s.key === _.key) ===
          activeScreenIndex
            ? "indicators-container__indicators__active"
            : ""
        } ${
          registrationFlow.findIndex((s) => s.key === _.key) < activeScreenIndex
            ? "indicators-container__indicators__active"
            : ""
        }`}
      ></div>
    ));

  return (
    <div className="profile__setup">
      <div className="profile__setup-container">
        {!hideNavigationBtn && (
          <div className="indicators-container">{indicators()}</div>
        )}

        <div className="active__component">
          <activeScreen.Component goToNext={goToNext} />
        </div>
      </div>

      <div className="registration-pagination">
        {!hideNavigationBtn && activeScreenIndex > 1 && (
          <button onClick={goBack}>
            <ArrowBack />
          </button>
        )}
        {!hideNavigationBtn &&
          (activeScreenIndex === mainFlow.length ? (
            // Complete registration button
            <Button
              variant="primary"
              onClick={handleProfileRegistration}
              title="Complete Registration"
            >
              Complete Registration
            </Button>
          ) : (
            <button
              onClick={goToNext}
              className="registration-pagination__next"
            >
              <ArrowForward />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Registration;
