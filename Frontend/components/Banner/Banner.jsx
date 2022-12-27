import React, { useState, useRef, useEffect } from 'react';
import { bannerItems } from '../../utils/data';
import { images } from '../../constants';
import { Flex } from '../Flex';
import { Carousel, Slide, ImgContainer, Image, Container, Dot } from './Banner.styles';
import { Dimensions } from 'react-native';

const Banner = ({ image = images.banner }) => {
  const [distance, setDistance] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef();
  let myCounter = 0;
  let timeout = null;

  useEffect(() => {
    startInterval();
    return () => clearInterval(timeout);
  }, [slideIndex]);

  myCounter = slideIndex;
  const startInterval = () => {
    timeout = setInterval(() => {
      setSlideIndex((slideIndex) => slideIndex + 1);
      if (myCounter >= 6) {
        setSlideIndex(0);
      }
      const windowWidth = Dimensions.get('window').width;
      setDistance(windowWidth);
    }, 8000);
  };

  const handleIndex = (index) => {
    setSlideIndex(index);
    const windowWidth = Dimensions.get('window').width;
    setDistance(windowWidth);
  };
  return (
    // <View style={styles.bannerContainer}>
    //   <Image style={styles.bannerImg} source={image} />
    // </View>
    // <MainContainer>
    <Container>
      <Carousel slideIndex={slideIndex} distance={distance}>
        {bannerItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer ref={sliderRef}>
              <Image source={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Carousel>
      <Flex align>
        {bannerItems.slice(0, 5).map((item, i) => (
          <Dot key={item.id} onClick={() => handleIndex(i)} i={i} slideIndex={slideIndex} />
        ))}
      </Flex>
    </Container>
    // </MainContainer>
  );
};

export default Banner;
