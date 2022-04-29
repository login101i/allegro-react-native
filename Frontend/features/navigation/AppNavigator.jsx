import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS, icons } from "../../constants";
import AuthNavigation from "./AuthNavigation";
import ListingsScreen from "../../screens/ListingsScreen";
import ProductsNavigator from "./StartNavigation";
import TabBarIcon from "../../components/TabBarIcon";
import Basket from "../../features/StartScreens/screens/Basket";

import StartNavigation from "../../features/navigation/StartNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.backgroundColor,
          height: 70,
          paddingBottom: 10
        }
      }}
    >
      <Tab.Screen
        name="Start"
        component={StartNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              barTitle={"Start"}
              icon={icons.home}
              focused={focused}
            />
          )
        }}
      />
      <Tab.Screen
        name="Szukaj"
        component={ProductsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              barTitle={"Szukaj"}
              icon={icons.settings}
              focused={focused}
            />
          )
        }}
      />

      <Tab.Screen
        name="Koszyk"
        component={Basket}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              barTitle={"Koszyk"}
              icon={icons.star}
              focused={focused}
            />
          )
        }}
      />
      <Tab.Screen
        name="Obserwuję"
        component={ListingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              barTitle={"Obserwuję"}
              icon={icons.star}
              focused={focused}
            />
          )
        }}
      />
      <Tab.Screen
        name="Moje Allegro"
        component={AuthNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              barTitle={"Moje allegro"}
              icon={icons.settings}
              focused={focused}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
