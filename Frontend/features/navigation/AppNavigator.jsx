import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../infrasctructure/theme';
import AuthNavigation from './AuthNavigation';
import ListingsScreen from '../../screens/ListingScreen/ListingsScreen';
import Basket from '../StartScreens/screens/Basket.screen/Basket.screen';
import StartNavigation from '../../features/navigation/StartNavigation';
import CreateProductScreen from '../../features/createProduct/CreateProductScreen';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import { CartContext } from '../../services/cart/CartContext';
import { View, Image } from 'react-native';
import { Textt } from '../../components';
import { Badge } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { cart, notification } = useContext(CartContext);

  const StyledBadge = styled(Badge)`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 20px;
    height: 20px;
    background-color: ${colors.allegroColor};
    color: white;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const RelativeContainer = styled.View`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const createScreenOptions = ({ route }) => {
    const TAB_ICON = {
      Start: HomeIcon,
      Szukaj: SearchIcon,
      Koszyk: ShoppingBasketIcon,
      Obserwuję: StarIcon,
      Moje_Allegro: PersonIcon
    };
    const IconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ focused }) => (
        <RelativeContainer>
          <IconName
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
            color={focused ? 'primary ' : 'disabled'}
          />
          <Textt size={14} color={focused ? 'primary' : 'disabled'}>
            {route.name}
          </Textt>
          {cart.length !== 0 && route.name === 'Koszyk' && <StyledBadge>{cart.length}</StyledBadge>}
        </RelativeContainer>
      )
    };
  };

  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.allegroColor,
        inactiveTintColor: colors.darkGray,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'white',
          height: 70,
          paddingLeft: 7,
          paddingRight: 7
        }
      }}
    >
      <Tab.Screen name="Start" component={StartNavigation} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Moje_Allegro" component={AuthNavigation} />
      <Tab.Screen name="Szukaj" component={CreateProductScreen} />
      <Tab.Screen name="Koszyk" component={Basket} />
      <Tab.Screen name="Obserwuję" component={ListingsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
