import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => ( 
    <RestaurantInfo restaurant = {restaurant} />
);
