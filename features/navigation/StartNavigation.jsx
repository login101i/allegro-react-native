import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../../constants";

import StartScreen from "../StartScreens/screens/StartScreen";
import ProductDetailsScreen from "../StartScreens/screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const StartNavigation = () => (
	<Stack.Navigator
		mode="modal"
		defaultScreenOptions={{
			cardStyle: {
				backgroundColor: COLORS.backgroundColor
			}
		}}
		headerMode="false"
	>
		<Stack.Screen name="StartScreen" component={StartScreen} />

		<Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
	</Stack.Navigator>
);

export default StartNavigation;
