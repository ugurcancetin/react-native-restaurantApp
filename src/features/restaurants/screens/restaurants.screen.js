import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/resturant.context";
import { Search } from "../components/search.component";


const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: Colors.blue300,
})`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      <LoadingContainer>{isLoading && <LoadingIndicator />}</LoadingContainer>
      <ResturantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo resturant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
