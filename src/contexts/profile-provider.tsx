import { FC, ReactNode, useState, useContext, createContext } from "react";

type IProfileProviderProps = {
  children: ReactNode;
};

type IProfileContext = {
  age: string;
  gender: string;
  height: string;
  weight: string;
  // preferences: string[];
  // goal: string[];
  preferences: string;
  goal: string;
  handleGenderSelect: (value: string) => void;
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
};

type ProfileData = {
  gender: string;
  age: string;
  weight: string;
  height: string;
  preferences: string;
  goal: string;
};

const initialProfileData: ProfileData = {
  gender: "",
  age: "",
  weight: "",
  height: "",
  preferences: "",
  goal: "",
};

const ProfileContext = createContext({} as IProfileContext);

export function useProfile() {
  return useContext(ProfileContext);
}

const ProfileProvider: FC<IProfileProviderProps> = (props) => {
  const { children } = props;

  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);

  const { age, gender, weight, height, preferences, goal } = profileData;

  const handleGenderSelect = (value: string) => {
    setProfileData((prevData) => {
      return {
        ...prevData,
        gender: value.toLowerCase(),
      };
    });
  };

  console.log(profileData);

  const value = {
    age,
    gender,
    height,
    weight,
    preferences,
    goal,
    handleGenderSelect,
    profileData,
    setProfileData,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
