import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../account/LoginScreen";
import RegisterScreen from "../account/RegisterScreen";
import AccountScreenLogout from "../account/AccountScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => (
	<Stack.Navigator mode="modal">
		<Stack.Screen
			name="AccountScreenLogout"
			component={AccountScreenLogout}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="Register" component={RegisterScreen} />
	</Stack.Navigator>
);

export default AuthNavigation;
