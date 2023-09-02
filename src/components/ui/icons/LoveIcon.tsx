import React, { FC } from "react";
import { IconProps } from "./icon.types";

const LoveIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.14739 7.82644C7.56373 7.82644 7.97176 7.7524 8.35422 7.61211L7.14739 8.70525L5.94056 7.61211C6.32302 7.7524 6.73105 7.82644 7.14739 7.82644Z"
        stroke="#BFE2C7"
        stroke-width="7.00935"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LoveIcon;
