import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import openIcon from "../../../../assets/openIcon";
import { Text } from "../../../components/text.component";
import { Favourite } from "./favourite.component";

import {
  RestaurantCard,
  RestaturanInfo,
  ResturantCardCover,
  Info,
  Rating,
  Address,
} from "./restaurant-info.styles";

export const RestaurantInfo = ({ restaurant }) => {
  let ratingArray = [];
  if (restaurant.rating) {
    ratingArray = Array.from(new Array(Math.round(restaurant.rating)));
  }

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <ResturantCardCover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />
      <Info>
        <Text variant="label">{restaurant.name}</Text>
        <RestaturanInfo>
          <Rating>
            {ratingArray.map((_, idx) => (
              <SvgXml
                key={`star-${restaurant.placeId}-${idx}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          {restaurant.isOpenNow && (
            <SvgXml xml={openIcon} width={30} height={30} />
          )}
        </RestaturanInfo>
        <Address>{restaurant.vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
