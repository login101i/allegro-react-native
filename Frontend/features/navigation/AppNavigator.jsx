import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { icons } from "../../constants";
import { colors } from "../../infrasctructure/theme";
import AuthNavigation from "./AuthNavigation";
import ListingsScreen from "../../screens/ListingsScreen";
import ProductsNavigator from "./StartNavigation";
import TabBarIcon from "../../components/TabBarIcon";
import Basket from "../../features/StartScreens/screens/Basket";
import { Ionicons } from "@expo/vector-icons";

import StartNavigation from "../../features/navigation/StartNavigation";
import CreateProductScreen from "../../features/createProduct/CreateProductScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Start: "md-home",
  Szukaj: "md-search",
  Koszyk: "md-basket",
  Obserwuję: "md-star",
  Moje_Allegro: "md-settings"
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const size = 25;
  return {
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={iconName}
        size={size}
        color={focused ? colors.allegroColor : colors.darkGray}
      />
    )
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: colors.allegroColor,
        inactiveTintColor: colors.darkGray,
        style: {
          marginBottom: 5
        }
      }}
    >
      <Tab.Screen name="Start" component={StartNavigation} />
      <Tab.Screen name="Szukaj" component={CreateProductScreen} />

      <Tab.Screen name="Koszyk" component={Basket} />
      <Tab.Screen name="Obserwuję" component={ListingsScreen} />
      <Tab.Screen name="Moje_Allegro" component={AuthNavigation} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
