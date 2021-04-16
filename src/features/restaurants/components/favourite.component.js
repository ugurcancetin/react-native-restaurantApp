import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const [favourites, setFavourites] = useState([]);
  const isFavourite =
    favourites.filter((r) => r === restaurant.placeId).length !== 0;

  const add = (placeId) => {
    setFavourites([...favourites, placeId]);
  };

  const remove = (placeId) => {
    const newFavourites = favourites.filter((x) => x !== placeId);
    setFavourites(newFavourites);
  };

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? add(restaurant.placeId) : remove(restaurant.placeId)
      }
    >
      <AntDesign
        name={isFavourite === true ? "heart" : "hearto"}
        size={24}
        color={isFavourite === true ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
