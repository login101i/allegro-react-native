import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Badge } from "react-native-paper";
import { CartContext } from "../../services/cart/CartContext";

import AuthNavigation from "./AuthNavigation";
import ListingsScreen from "../../screens/ListingsScreen";
import ProductsNavigator from "./StartNavigation";
import Basket from "../basket/Basket";
import { COLORS } from "../../constants";
import StartNavigation from "./StartNavigation";

const Tab = createBottomTabNavigator();

const Tab_Icons = {
  Start: "md-home",
  Szukaj: "md-search",
  Koszyk: "md-basket",
  Obserwuję: "md-star",
  Moje_Allegro: "md-login"
};

const StyledBadge = styled(Badge)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 16px;
  height: 16px;
`;
const RelativeContainer = styled.View`
  position: relative;
`;

const TabNavigator = () => {
  const { cart } = useContext(CartContext);

  const createScreenOptions = ({ route }) => {
    const iconName = Tab_Icons[route.name];
    return {
      tabBarIcon: ({ size, color }) =>
        cart.length === 0 && route.name === "Koszyk" ? (
          <RelativeContainer>
            <Ionicons name={iconName} size={size} color={color} />
            <StyledBadge>6</StyledBadge>
          </RelativeContainer>
        ) : (
          <Ionicons name={iconName} size={size} color={color} />
        )
    };
  };

  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: COLORS.allegroColor,
        inactiveTintColor: "gray",
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 70,
          paddingBottom: 10
        }
      }}
    >
      <Tab.Screen name="Moje_Allegro" component={AuthNavigation} />

      <Tab.Screen name="Start" component={StartNavigation} />
      <Tab.Screen name="Szukaj" component={ProductsNavigator} />
      <Tab.Screen name="Koszyk" component={Basket} />
      <Tab.Screen name="Obserwuję" component={ListingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
