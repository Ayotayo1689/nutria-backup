import { FC } from "react";
import { IGenderInputProps } from "./gender-input.types";
import "./gender-input.styles.scss";
import { useProfile } from "contexts/profile-provider";

const GenderInput: FC<IGenderInputProps> = (props) => {
  const { gender, imgUrl, onClick, isActive } = props;
  const {profileData} = useProfile()



  return (
    <>
      <div onClick={() => onClick()} className={`gender__input-container ${isActive ? 'gender__input-active' : ''}`}>
        <img className="gender__input-image" src={imgUrl} alt="gender" />
        <p>{gender}</p>
      </div>
    </>
  );
};

export default GenderInput;
