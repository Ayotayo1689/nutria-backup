import ScrollSelector from "components/scroll-selector";
import ProfileProvider from "contexts/profile-provider";
import React, { FC } from "react";

const ProfileSetupPages: FC = () => {

  const arrayOfValues = Array.from(
    { length: 100 },
    (_, index) => `${index + 1}`
  );

  const handleItemSelect = (selectedItem: string) => {
  };

  return (
    <ProfileProvider>
      <div>Registration</div>
      <ScrollSelector items={arrayOfValues} onSelect={handleItemSelect} />
    </ProfileProvider>
  );
};

export default ProfileSetupPages;
