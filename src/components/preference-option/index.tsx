import React, { FC } from "react";
import { IPreferenceOptionProps } from "./preference-option.types";
import "./preference-option.styles.scss";

const PreferenceOption: FC<IPreferenceOptionProps> = (props) => {
  const { title, imgUrl, isActive } = props;
  return (
    <div
      className={`preference__option-container ${
        isActive ? "preference__option-active" : ""
      }`}
    >
      <img
        className="preference__option-image"
        src={imgUrl}
        alt="preference-image"
      />
      <p className="preference__option-text">{title}</p>
    </div>
  );
};

export default PreferenceOption;
