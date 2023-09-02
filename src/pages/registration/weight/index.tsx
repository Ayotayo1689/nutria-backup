import React, { FC, useState } from "react";
import { RegistrationProps } from "../Registration.types";
import RegistrationLayout from "../RegistrationLayout";
import { defaultScrollValue } from "../age";
import Picker from "react-mobile-picker";
import { useProfile } from "contexts/profile-provider";

const Weight: FC<RegistrationProps> = () => {
  const [weightValueGroup, setWeightValueGroup] = useState({});
  const {setProfileData} = useProfile()

  const optionGroups = {
    weight: defaultScrollValue,
    unit: ["Kg"],
  };


  const handleChange = (name: string, value: string) => {
    setWeightValueGroup((prevValueGroups) => ({
      ...prevValueGroups,
      [name]: value,
    }));
    setProfileData((prevData) => ({
      ...prevData,
      weight: value
    }))
  };

  return (
    <RegistrationLayout
      title="What is your current weight?"
      description="This is used to set up recommendations just for you"
    >
      <div className="scroll__picker-container">
        <Picker
          optionGroups={optionGroups}
          valueGroups={weightValueGroup}
          onChange={handleChange}
          itemHeight={44}
          height={375}
        />
      </div>

    </RegistrationLayout>
  );
};

export default Weight;
