import { FC } from "react";
import { IRestaurantLocationProps } from "./restaurant-location.types";
import { restaurant1 } from "assets/images";
import "./restaurant-location.styles.scss";
import { location } from "assets/svg";
import { Rate } from "antd";

const RestaurantLocation: FC<Partial<IRestaurantLocationProps>> = (props) => {
  const { name, vicinity, rating } = props;

  return (
    <div className="restaurant__location-container">
      <img className="" src={restaurant1} alt={name} />
      <div className="restaurant__location-body">
        {/* Restaurant name */}
        <div className="restaurant__body">
          <p className="restaurant__body-name">{name}</p>
          <p className="restaurant__body-distance">500m</p>
        </div>

        {/* Restaurant address */}
        <div className="restaurant__address">
          <img
            className="restaurant__address-icon"
            src={location}
            alt="location"
          />
          <p title={vicinity} className="restaurant__address-vicinity">
            {vicinity}
          </p>
        </div>

        {/* Ratings */}
        <div className="restaurant__ratings-container">
          <p className="restaurant__ratings-text">Ratings:</p>
          <div>
            <Rate disabled allowHalf defaultValue={rating || 2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLocation;
