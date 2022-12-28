import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../infrasctructure/theme';
import AuthNavigation from './AuthNavigation';
import ListingsScreen from '../../screens/ListingsScreen';
import Basket from '../StartScreens/screens/Basket.screen/Basket.screen';
import { CustomIcon } from '../../components';
import StartNavigation from '../../features/navigation/StartNavigation';
import CreateProductScreen from '../../features/createProduct/CreateProductScreen';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import { CartContext } from '../../services/cart/CartContext';
import { TabBarIcon } from '../../components';
import { AccountIcon, CheckoutIcon, HomeIcon, MapIcon, SettingsIcon } from '../../assets/icons/icons';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { cart, notification } = useContext(CartContext);

  const createScreenOptions = ({ route }) => {
    const TAB_ICON = {
      Start: { icon: HomeIcon },
      Szukaj: { icon: MapIcon },
      Koszyk: { icon: CheckoutIcon },
      Obserwuję: { icon: SettingsIcon },
      Moje_Allegro: { icon: AccountIcon }
    };

    const iconName = TAB_ICON[route.name].icon;
    const badgeContent = TAB_ICON[route.name].badgeContent;
    const userNotification = TAB_ICON[route.name].socket;
    return {
      tabBarIcon: ({ focused }) => (
        <>
          <TabBarIcon
            size={27}
            icon={iconName}
            color={focused ? colors.allegroColor : colors.darkGray}
            badgeContent={userNotification?.type}
          />
        </>
      )
    };
  };

  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: colors.allegroColor,
        inactiveTintColor: colors.darkGray,
        style: {
          marginBottom: 5
        }
      }}
    >
      <Tab.Screen
        name="Start"
        component={StartNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={HomeIcon} focused={focused} />
        }}
      />
      <Tab.Screen name="Szukaj" component={CreateProductScreen} />
      <Tab.Screen name="Koszyk" component={Basket} />
      <Tab.Screen name="Obserwuję" component={ListingsScreen} />
      <Tab.Screen name="Moje_Allegro" component={AuthNavigation} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
