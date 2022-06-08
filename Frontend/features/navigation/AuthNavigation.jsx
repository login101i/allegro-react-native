import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../account/LoginScreen/LoginScreen";
import RegisterScreen from "../account/RegisterScreen";
import AccountScreenLogout from "../account/AccountScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="AccountScreenLogout"
        component={AccountScreenLogout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
