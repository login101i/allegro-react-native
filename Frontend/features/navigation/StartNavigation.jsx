import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

import StartScreen from "../StartScreens/screens/StartScreen";
import ProductDetailsScreen from "../StartScreens/screens/ProductDetails.screen/ProductDetailsScreen";
import SearchOutputScreen from "../../screens/SearchOutputScreen";
import TabNavigator from "./TabNavigator";
import { HeaderIcons } from "../../components";

const StartStack = createStackNavigator();

const StartNavigation = () => (
  <StartStack.Navigator
    mode="modal"
    // headerMode="none"
    screenOptions={{
      ...TransitionPresets.ModalPresentationIOS,
      headerShown: true
    }}
  >
    <StartStack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
      options={{ headerShown: false }}
    />
    <StartStack.Screen
      name="SearchOutput"
      component={SearchOutputScreen}
      options={{ headerBackTitle: "Back", headerRight: () => <HeaderIcons /> }}
    />
  </StartStack.Navigator>
);

export default StartNavigation;
