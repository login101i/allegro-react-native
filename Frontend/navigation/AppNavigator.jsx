import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
	createBottomTabNavigator,

} from "@react-navigation/bottom-tabs";

import Start from "../screens/StartScreen";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import AuthNavigation from "../navigation/AuthNavigation";
import ListingsScreen from "../screens/ListingsScreen";
import ProductsNavigator from '../navigation/ProductsNavigator'


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
					backgroundColor: "white",
					height: 70,
					paddingBottom: 10,
				},
			}}
		>
			<Tab.Screen
				name="Szukaj"
				component={ProductsNavigator}
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
							<Text
								style={{
									tintColor: focused ? COLORS.allegroColor : COLORS.lightGray,
									fontSize: SIZES.h4,
								}}
							>
								{" "}
								Szukaj
							</Text>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="Start"
				component={Start}
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
							<Text
								style={{
									color: focused ? COLORS.allegroColor : COLORS.lightGray,
									...FONTS.body5,
								}}
							>
								{" "}
								Start
							</Text>
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
							<Text
								style={{
									color: focused ? COLORS.allegroColor : COLORS.lightGray,
									...FONTS.body5,
								}}
							>
								{" "}
								Koszyk
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Obserwuję"
				component={ListingsScreen}
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
							<Text
								style={{
									color: focused ? COLORS.allegroColor : COLORS.lightGray,
									...FONTS.body5,
								}}
							>
								{" "}
								Obserwuję
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Moje Allegro"
				component={AuthNavigation}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								width: "50px",
							}}
						>
							<Image
								source={images.ethereum}
								resizeMode="cover"
								style={{
									width: 30,
									height: 30,

									borderRadius: 50,
								}}
							/>
							<Text
								style={{
									color: focused ? COLORS.allegroColor : COLORS.lightGray,
									display: "flex",
									textAlign: "center",
									...FONTS.body5,
								}}
							>
								{" "}
								Moje Allegro
							</Text>
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

export default AppNavigator;
