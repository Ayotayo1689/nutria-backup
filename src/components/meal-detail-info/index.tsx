import React, { FC } from "react";
import { IMealDetailInfoProps } from "./meail-detail-info.types";
import './meal-detail-info.styles.scss'

const MealDetailInfo: FC<IMealDetailInfoProps> = (props) => {
    const {imgUrl, info} = props
  return (
    <div className="info__container">
      {/* info__icon */}
      <div className="info__icon">
        <img className="info__icon-img" src={imgUrl} alt="calories" />
      </div>

      {/* information detail */}
      <div className="info__detail">{info}</div>
    </div>
  );
};

export default MealDetailInfo;
