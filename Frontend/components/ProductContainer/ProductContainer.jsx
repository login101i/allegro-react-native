import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Flex, Textt, LogoLoader, ImageComponent, Space } from '..';
import { Discount, OldPrice, CustomImage, ImageContainer, GreatPrice, Rating, DescriptionContainer } from './ProductContainer.styles';
import Image from '../../assets/images/smart.png';

export const ProductContainer = ({ product = {}, onPress, direction = 'column', productsByKeyword }) => {
  const {
    title,
    price,
    description,
    ratings,
    images,
    category,
    seller,
    stock,
    img,
    oldPrice = '100',
    newPrice = '99',
    discount = '0'
  } = product;

  const ratingArray = Array.from(new Array(Math.floor(ratings)));
  const remainStars = Array.from(new Array(5 - Math.floor(ratings)));

  const date = new Date();
  let hour = date.getHours();

  return (
    <>
      <Space height="18px" />
      <TouchableWithoutFeedback onPress={onPress}>
        {product ? (
          <Flex
            style={{
              flexDirection: direction === 'row' ? 'column' : 'row',
              height: productsByKeyword ? '210px' : '100%'
            }}
            width={direction === 'row' ? '200px' : '480px'}
          >
            <ImageContainer productsByKeyword={productsByKeyword}>
              <CustomImage source={{ uri: img[0]?.url }} />
            </ImageContainer>
            <DescriptionContainer>
              {productsByKeyword && (
                <Flex column>
                  {price < 121 && <GreatPrice>Super cena</GreatPrice>}
                  <Textt upperCase wrap bold>
                    {title}
                  </Textt>
                  <Flex align>
                    <Rating>
                      {ratingArray.map((_, i) => (
                        <Textt key={`star-${i}`}>x</Textt>
                      ))}
                      {remainStars.map((_, i) => (
                        <Textt key={`star-${i}`}>x</Textt>
                      ))}
                    </Rating>
                    <Flex>
                      {Math.floor(50 * Math.random())} <Textt>opini produktu</Textt>
                    </Flex>
                  </Flex>
                  <Textt>{Math.floor(120 * Math.random())} osób kupiło ten produkt</Textt>
                </Flex>
              )}
              <Space height="20px" />

              <Flex>
                <Discount>-{discount} %</Discount>
                <OldPrice>{oldPrice} zł</OldPrice>
              </Flex>
              <Flex align>
                <Textt size={16} bold>
                  {price} zł
                </Textt>
                <ImageComponent img={Image} width="90px" />
              </Flex>

              <Textt />
              {price >= 40 && (
                <Flex column>
                  <Textt>zapłać później z pay, sprawdź</Textt>
                  <Flex>
                    {hour < 20 && hour > 10 && <Textt bold>Kup do 20 : 00 - </Textt>}
                    <Textt bold color="green">
                      dostawa jutro
                    </Textt>
                  </Flex>
                </Flex>
              )}
              {/* <Textt size={8} wrap>
                {title}
              </Textt> */}
            </DescriptionContainer>
          </Flex>
        ) : (
          <LogoLoader
            source={{
              uri: 'https://maciejewski.com/wp-content/uploads/allegro.png'
            }}
            style={{
              width: '200px',
              height: '200px'
            }}
          />
        )}
      </TouchableWithoutFeedback>
      <Space height="10px" />
    </>
  );
};
