import React from "react";
import { StyleSheet } from "react-native";
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

export const RestaurantInfo = ({ resturant = {} }) => {
  const {
    name = "Some Res",
    address = "Some add",
    isOpen = true,
    rating = 3.6,
    images = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-413x275.jpg",
    ],
  } = resturant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: images[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RestaturanInfo>
            <Rating>
            {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
            ))}
            </Rating>
            {isOpen && <SvgXml xml={openIcon} width={30} height={30} />}
        </RestaturanInfo>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
