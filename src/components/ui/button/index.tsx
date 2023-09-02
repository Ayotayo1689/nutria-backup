import React, { FC } from "react";
import { ButtonProps } from "./button.types";
import "./button.styles.scss";
import { ClipLoader } from "react-spinners";

const Button: FC<ButtonProps> = ({
  className = "",
  children,
  variant = "primary",
  onClick,
  disabled,
  loader,
  ...rest
}) => {
  return (
    <button
    {...rest}
      onClick={onClick}
      className={`base-button--${variant} ${className}`}
    >
      {/* {children} */}
      {loader ? (
        <ClipLoader
          color="#FAFAFA"
          loading={true}
          size={24}
          aria-label="loading spinner"
          data-testid="loader"
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
