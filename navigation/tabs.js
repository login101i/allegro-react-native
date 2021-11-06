import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Start } from "../screens";
import LoginScreen from "../screens/LoginScreen";
import AccountScreenLogout from "../screens/AccountScreenLogout";
import { COLORS, FONTS, icons, images } from "../constants";
import AppPicker from "../components/AppPicker";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.backgroundColor,
          height: 70,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Start"
        component={AppPicker}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.allegroColor : COLORS.lightGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.allegroColor : COLORS.lightGray, ...FONTS.body5 }}> Start</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Szukaj"
        component={Start}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.allegroColor : COLORS.lightGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.allegroColor : COLORS.lightGray, ...FONTS.body5 }}> Szukaj</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Koszyk"
        component={Start}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={icons.star}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.allegroColor : COLORS.lightGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.allegroColor : COLORS.lightGray, ...FONTS.body5 }}> Koszyk</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Obserwuję"
        component={Start}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={icons.star}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.allegroColor : COLORS.lightGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.allegroColor : COLORS.lightGray, ...FONTS.body5 }}> Obserwuję</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Moje Allegro"
        component={AccountScreenLogout}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", width: "50px" }}>
              <Image
                source={images.ethereum}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,

                  borderRadius: 50,
                }}
              />
              <Text style={{ color: focused ? COLORS.allegroColor : COLORS.lightGray, display: "flex", textAlign: "center", ...FONTS.body5 }}> Moje Allegro</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  logo: {
    borderRadius: 50,
  },
});

export default Tabs;
