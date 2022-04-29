import React from "react";
import {
	createStackNavigator,
	TransitionPresets
} from "@react-navigation/stack";

import StartScreen from "../StartScreens/screens/StartScreen";
import ProductDetailsScreen from "../StartScreens/screens/ProductDetailsScreen";
import SearchOutputScreen from "../../screens/SearchOutputScreen";
import TabNavigator from "./TabNavigator";

const StartStack = createStackNavigator();

const StartNavigation = () => (
	<StartStack.Navigator
		mode="modal"
		headerMode="none"
		screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
	>
		<StartStack.Screen name="StartScreen" component={StartScreen} />
		<StartStack.Screen name="ProductDetails" component={ProductDetailsScreen} />
		<StartStack.Screen
			name="SearchOutput"
			component={SearchOutputScreen}
		/>
	</StartStack.Navigator>
);

export default StartNavigation;
