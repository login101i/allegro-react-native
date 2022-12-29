import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Textt } from '..';
import { COLORS } from '../../constants';
import { CartContainer, DetailContainer, StyledImage } from './Card.styles';
// import { Image } from "react-native-expo-image-cache";

export const Card = ({ title, subTitle, image, onPress, thumbnailUrl }) => {
  const [showImage, setShowImage] = useState(false);

  const images = [
    {
      url: 'https://i.pinimg.com/564x/8a/5b/db/8a5bdb6815645fdc25919753dce156d0.jpg'
    }
  ];

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <CartContainer>
          <DetailContainer source={image} />
          <DetailContainer>
            <Textt title={title} subTitle={subTitle} color="purple" />
          </DetailContainer>
        </CartContainer>
      </TouchableWithoutFeedback>
      {/* <Modal visible={showImage} transparent={true} >
                <ImageViewer imageUrls={images} onClick={() => setShowImage(false)} pageAnimateTime={40}/>
            </Modal> */}
    </>
  );
};
