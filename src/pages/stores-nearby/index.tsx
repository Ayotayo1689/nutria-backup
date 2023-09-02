import React, { FC, useState, useEffect } from "react";
import useGetData from "hooks/useGetData";
import { useQuery } from "react-query";
import { baseUrl } from "config/api";
import { IRestaurantLocationProps } from "components/restaurant-location/restaurant-location.types";
import RestaurantLocation from "components/restaurant-location";
import "./stores-nearby.styles.scss";

const storeUrl = `${baseUrl}/store/get-stores-around?latitude= 6.507098&longitude=3.375425`;

const StoresNearby: FC = () => {
  const [nearbyStores, setNearbyStores] =
    useState<IRestaurantLocationProps[]>();

  const { getData } = useGetData(storeUrl);
  const { data } = useQuery("storesNearby", getData, { suspense: true });

  useEffect(() => {
    setNearbyStores(data);
  }, [data]);

  return (
    <div className="stores__nearby-container">
    {/* Nearby Stores List */}
        <div className="stores__nearby-list">
          {nearbyStores?.map((location, i) => (
            <RestaurantLocation
              key={`nearbyStores/${i}`}
              name={location.name}
              vicinity={location.vicinity}
              rating={location.rating}
            />
          ))}
        </div>
    </div>
  );
};

export default StoresNearby;
