import { FC, useState } from "react";
import RegistrationLayout from "../RegistrationLayout";
import PreferenceOption from "components/preference-option";
import preferenceData from "./preferences-data";
import "./preferences.styles.scss";
import { useProfile } from "contexts/profile-provider";

const Preference: FC = () => {
  const { setProfileData } = useProfile();
  const [activePreference, setActivePreference] = useState("");

  return (
    <RegistrationLayout
      title="What are your preferences?"
      description="This is used to set up recommendations just for you"
    >
      <div className="preferences__container">
        {preferenceData.map((preference, i) => (
          <div
          key={`preference-${i}`}
            onClick={() => {
              setProfileData((prevData) => ({
                ...prevData,
                preferences: preference.title.toLowerCase(),
              }));

              setActivePreference(preference.title);
            }}
          >
            <PreferenceOption
              key={preference.title}
              isActive={activePreference === preference.title}
              imgUrl={preference.imgUrl}
              title={preference.title}
            />
          </div>
        ))}
      </div>
    </RegistrationLayout>
  );
};

export default Preference;
