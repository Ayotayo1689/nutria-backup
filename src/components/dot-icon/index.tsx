import "./dot-icon.styles.scss";
import { FC } from "react";
import { IDotIconProps } from "./dot-icon.types";

const DotIcon: FC<IDotIconProps> = (props) => {
  const { active, setActiveSlide, index } = props;
  return (
    <div className="active__dot-icon" onClick={() => setActiveSlide(index)}>
      {!active ? (
        <svg
        className="active__dots"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="#BFE2C7" />
        </svg>
      ) : (
        <svg
          width="39"
          height="16"
          viewBox="0 0 39 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="39" height="16" rx="8" fill="#31A14B" />
        </svg>
      )}
    </div>
  );
};

export default DotIcon;
