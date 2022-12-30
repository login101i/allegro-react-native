import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SearchScreen } from '../searchForProduct/Search.screen';
import { SearchCategoryListScreen } from '../searchForProduct/SearchCategoryList.screen';
import { colors } from '../../infrasctructure/theme';
import ProductDetailsScreen from '../StartScreens/screens/ProductDetails.screen/ProductDetailsScreen';
import { SearchOutputScreen } from '../../screens/SearchOutputScreen';
import { HeaderTabs } from '../../components';
import { Textt } from '../../components';

const StartStack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <StartStack.Navigator
      mode="modal"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: true,
        cardStyle: { backgroundColor: colors.lightGray }
      }}
    >
      <StartStack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <StartStack.Screen name="SearchCategoryListScreen" component={SearchCategoryListScreen} options={{ headerShown: false }} />
    </StartStack.Navigator>
  );
};

export default SearchNavigator;
