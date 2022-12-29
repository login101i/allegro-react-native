import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { ProductContainer } from '../../../../components';
import { ProductsContext } from '../../../../services/products/ProductsContext';
import { BorderAndTitle, Textt } from '../../../../components';
import { CustomActivityIndicator } from '../../../../components';
import { Divider } from 'react-native-paper';

const WeekOccasions = ({ navigation, filter = '', direction = 'column', keyword = '', productsByKeyword = [] }) => {
  let { products, isLoading } = useContext(ProductsContext);
  if (productsByKeyword.length > 0) products = productsByKeyword;

  const Separator = () => {
    return <Divider />;
  };

  return (
    <>
      {!keyword && filter !== 'Elektronika' && <Textt size={17}>Hity w kategorii {filter}:</Textt>}
      <FlatList
        horizontal={direction === 'row' ? true : false}
        showsHorizontalScrollIndicator={false}
        data={productsByKeyword.length > 0 ? products : products.filter((p) => p.category.toLowerCase() === filter.toLowerCase())}
        keyExtractor={(product) => product.title}
        ItemSeparatorComponent={Separator}
        renderItem={(product) =>
          isLoading ? (
            <CustomActivityIndicator />
          ) : (
            <ProductContainer
              product={product.item}
              compactImages
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  product: product.item
                })
              }
              direction={direction}
            />
          )
        }
      />
      <BorderAndTitle title="Zobacz więcej" border />
    </>
  );
};

export default WeekOccasions;
