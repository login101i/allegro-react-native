import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import StartScreen from '../screens/StartScreen'
import RegisterScreen from '../screens/RegisterScreen'
import AccountScreenLogout from '../screens/AccountScreenLogout'

const Stack = createStackNavigator();

const AuthNavigation = () => (
	<Stack.Navigator mode="modal" >
		<Stack.Screen
			name="AccountScreenLogout"
			component={AccountScreenLogout}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name="Login" component={LoginScreen}
        />
		<Stack.Screen name="Register" component={RegisterScreen} />
	</Stack.Navigator>
);

export default AuthNavigation;
