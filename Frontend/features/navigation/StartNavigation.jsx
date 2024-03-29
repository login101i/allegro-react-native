import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import StartScreen from '../StartScreens/screens/StartScreen/StartScreen.component';
import ProductDetailsScreen from '../StartScreens/screens/ProductDetails.screen/ProductDetailsScreen';
import { SearchOutputScreen } from '../../screens/SearchOutputScreen';
import { HeaderTabs } from '../../components';
import { Textt } from '../../components';

const StartStack = createStackNavigator();

const StartNavigation = () => {
  return (
    <StartStack.Navigator
      mode="modal"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: true,
        cardStyle: { backgroundColor: 'white' }
      }}
    >
      <StartStack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
      <StartStack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ headerShown: false }} />
      <StartStack.Screen
        name="SearchOutput"
        component={SearchOutputScreen}
        options={{
          headerRight: () => <HeaderTabs />
        }}
      />
    </StartStack.Navigator>
  );
};

export default StartNavigation;
