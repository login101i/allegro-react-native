import React, { useContext } from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

import StartScreen from "../StartScreens/screens/StartScreen";
import ProductDetailsScreen from "../StartScreens/screens/ProductDetails.screen/ProductDetailsScreen";
import SearchOutputScreen from "../../screens/SearchOutputScreen";
import { HeaderIcons } from "../../components";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";

const StartStack = createStackNavigator();

const StartNavigation = () => {

  return (
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
        options={{
          headerBackTitle: "Back",
          headerRight: () => <HeaderIcons />
        }}
      />
    </StartStack.Navigator>
  );
};

export default StartNavigation;
