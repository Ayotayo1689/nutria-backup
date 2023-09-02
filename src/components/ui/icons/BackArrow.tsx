import { FC } from "react";
import { IconProps } from "./icon.types";

const BackArrow: FC<IconProps> = (props) => {
  const { boxSize, onClick, color = "#EAF6ED" } = props;

  return (
    <svg
      onClick={onClick}
      width={boxSize}
      height={boxSize}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6941 7.93225H2.3039M7.56091 1.79907L1.42773 7.93225L7.56091 14.0654"
        stroke={color}
        strokeWidth="1.75234"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackArrow;
