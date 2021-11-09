import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants";

import ListingsScreen from "../screens/ListingsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const ProductsNavigator = () => (
	<Stack.Navigator
		mode="modal"
		defaultScreenOptions={{
			cardStyle: {
				backgroundColor: COLORS.backgroundColor,
			},
		}}
	>
		<Stack.Screen
			name="ListingsScreen"
			component={ListingsScreen}
			options={{ 
                headerShown: false ,
                cardStyle:{
                    backgroundColor:COLORS.backgroundColor
                }
            }}
		/>
		<Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
	</Stack.Navigator>
);

export default ProductsNavigator;
