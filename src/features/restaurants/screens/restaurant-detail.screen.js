import React from "react";
import { Text } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return <RestaurantInfo restaurant={restaurant} />;
};
