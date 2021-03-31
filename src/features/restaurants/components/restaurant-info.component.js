import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import openIcon from "../../../../assets/openIcon";
import { Text } from "../../../components/text.component";

import {
    RestaurantCard,
    RestaturanInfo,
    ResturantCardCover,
    Info,
    Rating,
    Address,
  } from "./restaurant-info.styles";

export const RestaurantInfo = ({ resturant }) => {
  let ratingArray = [];
  if(resturant.rating){
    ratingArray = Array.from(new Array(Math.round(resturant.rating)));
  }

  return (
    <RestaurantCard elevation={5}>
      <ResturantCardCover key={resturant.name} source={{ uri: resturant.photos[0] }} />
      <Info>
        <Text variant="label">{resturant.name}</Text>
        <RestaturanInfo>
            <Rating>
              {ratingArray.map((_, idx) => (
                  <SvgXml key={`star-${resturant.placeId}-${idx}`} xml={star} width={20} height={20} />
              ))}
            </Rating>
            {resturant.isOpenNow && <SvgXml xml={openIcon} width={30} height={30} />}
        </RestaturanInfo>
        <Address>{resturant.vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
