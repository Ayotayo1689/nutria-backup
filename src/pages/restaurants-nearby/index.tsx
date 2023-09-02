import { FC, useEffect, useState } from "react";
import { baseUrl } from "config/api";
import { IRestaurantLocationProps } from "components/restaurant-location/restaurant-location.types";
import RestaurantLocation from "components/restaurant-location";
import useGetData from "hooks/useGetData";
import { useQuery } from "react-query";
import "./restaurants-nearby.styles.scss";

export const restaurantUrl = `${baseUrl}/restaurant/get-restaurants-around?latitude=6.48572&longitude=3.388029`;

const RestaurantsNearby: FC = () => {
  const [nearbyRestaurants, setNearbyrestaurants] =
    useState<IRestaurantLocationProps[]>();

  const { getData } = useGetData(restaurantUrl);
  const { data } = useQuery("nearbyRestaurant", getData, { suspense: true });

  useEffect(() => {
    setNearbyrestaurants(data);
  }, [data]);

  return (
    <div className="restaurants__nearby-container">
      {/* Restaurants Nearby List */}
      <div className="restaurants__nearby-list">
        {nearbyRestaurants?.map((location, i) => (
          <RestaurantLocation
            key={`nearbyRestaurants/${i}`}
            name={location.name}
            vicinity={location.vicinity}
            rating={location.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsNearby;
