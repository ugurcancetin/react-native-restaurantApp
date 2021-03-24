import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantCard = styled(Card)`
padding: ${(props) => props.theme.space[1]};
color: ${(props) => props.theme.colors.bg.primary};
`;

export const ResturantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[2]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
padding: ${(props) => props.theme.space[2]};
`;

export const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaturanInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[1]};
`;