import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { FlatList, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/safe-area.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]}
`;

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ResturantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
