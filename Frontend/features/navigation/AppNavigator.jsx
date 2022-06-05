import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../infrasctructure/theme";
import AuthNavigation from "./AuthNavigation";
import ListingsScreen from "../../screens/ListingsScreen";
import Basket from "../StartScreens/screens/Basket.screen/Basket.screen";
import { CustomIcon } from "../../components";
import StartNavigation from "../../features/navigation/StartNavigation";
import CreateProductScreen from "../../features/createProduct/CreateProductScreen";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import { CartContext } from "../../services/cart/CartContext";

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  const { cart } = useContext(CartContext);

  const TAB_ICON = {
    Start: { icon: HomeIcon },
    Szukaj: { icon: SearchIcon },
    Koszyk: { icon: ShoppingBasketIcon, badgeContent: cart.length },
    Obserwuję: { icon: StarIcon },
    Moje_Allegro: { icon: PersonIcon }
  };

  const iconName = TAB_ICON[route.name].icon;
  const badgeContent=TAB_ICON[route.name].badgeContent
  return {
    tabBarIcon: ({ focused }) => (
      <>
        <CustomIcon
          size={27}
          icon={iconName}
          color={focused ? colors.allegroColor : colors.darkGray}
          badgeContent={badgeContent}
        />
      </>
    )
  };
};

const AppNavigator = () => {
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
      <Tab.Screen name="Start" component={StartNavigation} />
      <Tab.Screen name="Szukaj" component={CreateProductScreen} />

      <Tab.Screen name="Koszyk" component={Basket} />

      <Tab.Screen name="Obserwuję" component={ListingsScreen} />
      <Tab.Screen name="Moje_Allegro" component={AuthNavigation} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
