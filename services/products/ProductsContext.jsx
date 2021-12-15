import React, { useState, createContext } from "react";

import { productsData } from "./ProductsData";

export const ProductsContext = createContext();

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState(productsData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	console.log(productsData);
	return (
		<ProductsContext.Provider
			value={{
				products,
				isLoading,
				error,
				products: productsData
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
