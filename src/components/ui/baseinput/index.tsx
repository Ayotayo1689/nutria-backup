import React, { useState } from "react";
import { BaseInputProps } from "./BaseInput.types";
import "./BaseInput.styles.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const BaseInput = (props: BaseInputProps, ref: any) => {
  const {
    id,
    placeholder,
    text,
    type,
    label,
    value,
    onChange,
    className = "",
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <label className="base-input">
      <label htmlFor={text} className="base-input__content">
        {label}
      </label>
      <input
        type={inputType}
        className={`base-input__content__input  ${className}`}
        {...{ id, value, placeholder, onChange, ...rest }}
        ref={ref}
      />
      {type === "password" && (
        <button
          onClick={toggle}
          type="button"
          className="base-input__content__button"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </label>
  );
};

export default React.forwardRef(BaseInput);
