import React, { FC, useState } from "react";
import { RegistrationProps } from "../Registration.types";
import RegistrationLayout from "../RegistrationLayout";
import Picker from "react-mobile-picker";
import './age.styles.scss'
import { useProfile } from "contexts/profile-provider";

export const defaultScrollValue = Array(300)
  .fill(null)
  .map((_, i) => String(i + 1));

const Age: FC<RegistrationProps> = () => {
  const [ageValueGroups, setAgeValueGroups] = useState({});
  const { setProfileData, } = useProfile()

  const optionGroups = {
    age: defaultScrollValue,
    unit: ["years"],
  };

  const handleChange = (name: string, value: string) => {
    setAgeValueGroups((prevAge) => ({
      ...prevAge,
      [name]: value
    }));
    setProfileData((prevData) => ({
      ...prevData,
      age: value
    }))
    
    // console.log(name, value);
  };


  return (
    <RegistrationLayout
      title="What is your age?"
      description="This is used in getting a personalized results and plan for you"
    >
      <div className="scroll__picker-container">
        <Picker
          optionGroups={optionGroups}
          valueGroups={ageValueGroups}
          onChange={handleChange}
          itemHeight={44}
          height={375}
        />
      </div>
    </RegistrationLayout>
  );
};

export default Age;
