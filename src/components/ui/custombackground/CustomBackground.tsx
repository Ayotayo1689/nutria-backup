import React from "react";
import { ICustomBackgroundProps } from "./CustomBackground.type";
import "./CustomBackground.styles.scss";

function CustomBackground({ variant, children }: ICustomBackgroundProps) {
  return (
    <div className="custom-background">
      <svg
        className={`background--${variant}`}
        // width="344"
        // height="234"
        viewBox="0 0 344 234"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M248.13 26.2245C247.439 11.5456 235.336 0 220.641 0H27.52C12.3211 0 0 12.3211 0 27.52V205.909C0 221.107 12.3211 233.429 27.52 233.429H316.48C331.679 233.429 344 221.107 344 205.909V102.519C344 86.8115 330.875 74.29 315.185 75.0294L278.063 76.7788C262.881 77.4943 249.994 65.7669 249.278 50.5848L248.13 26.2245Z"
        />
      </svg>
      {children}
    </div>
  );
}

export default CustomBackground;
