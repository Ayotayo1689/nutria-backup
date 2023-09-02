import { FC, useState } from "react";
import RegistrationLayout from "../RegistrationLayout";
import "./gender.styles.scss";
import GenderInput from "components/gender-input";
import male from "../../../assets/svg/male.png";
import female from "../../../assets/svg/female.png";
import { useProfile } from "contexts/profile-provider";

const Gender: FC = () => {
  const { handleGenderSelect } = useProfile();
  const [activeGender, setActiveGender] = useState<number>(3);

  return (
    <RegistrationLayout
      title="What is your gender?"
      description="To give you a better experience we need to know your gender"
    >
      <div className="gender__container">
        <GenderInput
          isActive={activeGender === 0}
          onClick={() => {
            handleGenderSelect("male");
            setActiveGender(0);
          }}
          imgUrl={male}
          gender="Male"
        />
        <GenderInput
          isActive={activeGender === 1}
          onClick={() => {
            handleGenderSelect("female");
            setActiveGender(1);
          }}
          imgUrl={female}
          gender="Female"
        />
      </div>
      <button
        onClick={() => handleGenderSelect("other")}
        className="gender__container-text"
      >
        Prefer not to say
      </button>
    </RegistrationLayout>
  );
};

export default Gender;
