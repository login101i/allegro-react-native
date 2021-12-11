import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./features/navigation/AppNavigator";
import NavigationTheme from "./features/navigation/navigationTheme";
import { ProductContextProvider } from "./services/products/ProductsContex";

const App = () => {
	return (
		<NavigationContainer theme={NavigationTheme}>
			<ProductContextProvider>
				<AppNavigator />
			</ProductContextProvider>
		</NavigationContainer>
	);
};

export default App;
