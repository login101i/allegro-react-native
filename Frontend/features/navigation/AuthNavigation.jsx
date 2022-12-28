import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { Text } from 'react-native';
import { LoginScreen } from '../account/LoginScreen/LoginScreen';
import { RegisterScreen } from '../account/RegisterScreen';
import { LogoutScreen } from '../account/LogoutScreen';
import AccountScreenLogout from '../account/AccountScreen';
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="AccountScreenLogout" component={AccountScreenLogout} options={{ headerShown: false }} />

      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation, route }) => ({
          headerRight: () => <Button title="Update count" />
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
