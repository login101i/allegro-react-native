import React, { useEffect, useState, useContext } from 'react';
import { Textt, Flex } from '../../../../components';

import { View } from 'react-native';
import { colors } from '../../../../infrasctructure/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarIcon from '@mui/icons-material/Star';
import { AuthenticationContext } from '../../../../services/authentication/AuthenticationContext';
import axios from 'axios';
import { CustomActivityIndicator } from '../../../../components';
import { StarIconContainer, MainContainer, Counter } from './ProductDetailsInfo.styles';

const ProductDetailsInfo = ({ product, countSlider }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, setState } = useContext(AuthenticationContext);
  const productIsVafourite = state.user?.favouriteProducts.includes(product._id);

  const handleFavouriteProducts = async (productId, userId) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`http://localhost:8000/api/addfavouriteproduct`, { productId, userId });
      console.log(data);
      setTimeout(() => {
        setIsLoading(false);
        setState({
          ...state,
          user: data?.user
        });
      }, 2000);
      await AsyncStorage.setItem('@auth', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  const addStar = () => {
    var array = [];
    for (var i = 0; i < product.ratings; i++) {
      array = [...array, i];
    }

    return array;
  };

  return (
    <MainContainer>
      <Flex column>
        <Flex>
          <Counter>
            <Textt>
              {countSlider + 1}/ {product.img.length}
            </Textt>
          </Counter>
        </Flex>
        <Textt>{product.title}</Textt>
        <Flex align>
          <Textt>{product.ratings}</Textt>
          <Flex>
            {addStar().map((star) => (
              <Ionicons name="star" color={colors.allegroColor} key={Math.random()} size={17} />
            ))}
          </Flex>
          <Textt>{product.numOfReviews} ocen produktu</Textt>
        </Flex>
      </Flex>
      <StarIconContainer>
        {isLoading ? (
          <CustomActivityIndicator />
        ) : (
          <StarIcon
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
            color={productIsVafourite ? 'success ' : 'disabled'}
            onClick={() => handleFavouriteProducts(product._id, state.user._id)}
          />
        )}
      </StarIconContainer>
    </MainContainer>
  );
};

export default ProductDetailsInfo;
