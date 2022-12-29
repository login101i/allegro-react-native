import React, { useEffect, useState, useContext } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { ProductContainer, CustomActivityIndicator, SafeArea } from '../../components';
import { Textt } from '../../components';
import { MainContainer } from './ListingScreen.styles';
import { Divider } from 'react-native-paper';
import { ProductsContext } from '../../services/products/ProductsContext';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';

export default function ListingScreen({ navigation }) {
  const [favourites, setFavourites] = useState([]);
  let { products, isLoading } = useContext(ProductsContext);
  let { state } = useContext(AuthenticationContext);

  useEffect(() => {
    const getUserFavouriteProducts = () => {
      if (!state.user) return;
      let favouriteProductsArray = [];
      const productsId = products.map((product) => product._id);

      let userFavouriteProductsId = state.user.favouriteProducts;

      for (let i = 0; i < userFavouriteProductsId.length; i++) {
        if (productsId.includes(userFavouriteProductsId[i])) {
          favouriteProductsArray.push(products.find((product) => product._id === userFavouriteProductsId[i]));
        }
      }
      setFavourites(favouriteProductsArray);
    };
    getUserFavouriteProducts();
  }, []);

  const Separator = () => {
    return <Divider />;
  };

  if (isLoading) {
    return (
      <MainContainer>
        <CustomActivityIndicator />
      </MainContainer>
    );
  }
  return (
    <MainContainer>
      <ScrollView style={{ paddingBottom: '80px' }}>
        {favourites?.length > 0 ? (
          <FlatList
            data={favourites}
            keyExtractor={(product) => product.title}
            ItemSeparatorComponent={Separator}
            renderItem={(product) => (
              <ProductContainer
                product={product.item}
                compactImages
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    product: product.item
                  })
                }
              />
            )}
          />
        ) : (
          <SafeArea>Jeszcze nie obserwujesz żadnej z oferty</SafeArea>
        )}
      </ScrollView>
    </MainContainer>
  );
}
