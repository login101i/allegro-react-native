import React, { useState } from "react";
import { CryptoDetail, Transaction, Start } from "./screens";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
	Flatlist,
	ScrollView,
	TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginPage from "./screens/LoginScreen";
import Card from "./components/Card";

import ActivityIndicator from "./components/ActivityIndicator";
import AppPicker from "./components/AppPicker";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreenLogout.jsx";
import LoginScreen from "./screens/LoginScreen";
import AccountScreenLogout from "./screens/AccountScreenLogout";
import ListingScreen from "./screens/ListingsScreen";
import ListingEditScreen from "./screens/ListingEditScreen";
import CategoryPickerItem from "./components/CategoryPickerItem";
import { AppFormField } from "./components/forms";
import ViewImageScreen from "./screens/ViewImageScreen";
import ListingDetailScreen from "./screens/ListingDetailScreen";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigation from './navigation/AuthNavigation'

const Stack = createStackNavigator();

const listings = [
	{
		id: 1,
		label: "Kurtka skórzana",
		price: "199",
		image: require("./assets/images/ethereum.png"),
	},
	{
		id: 2,
		price: "1199",
		label: "Kurtka z lisa",
		image: require("./assets/images/ethereum.png"),
	},
];

const App = () => {
	return (
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
	);
};

export default App;
