import React, { useState, createContext } from "react";

import { productsData } from "./ProductsData";

export const ProductsContext = createContext();

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

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
