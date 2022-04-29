import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Image} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

import AppText from "../components/AppText";
import {COLORS} from "../constants"

// import { Image } from "react-native-expo-image-cache";

export default function Card({ title, subTitle, image, onPress, thumbnailUrl }) {
  const [showImage, setShowImage] = useState(false);

  const images = [
    {
      url: "https://i.pinimg.com/564x/8a/5b/db/8a5bdb6815645fdc25919753dce156d0.jpg",
    },
  ];

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <Image src={image} style={styles.image} />

          <View style={styles.detailContainer}>
            <AppText title={title} subTitle={subTitle} color="purple" />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* <Modal visible={showImage} transparent={true} >
                <ImageViewer imageUrls={images} onClick={() => setShowImage(false)} pageAnimateTime={40}/>
            </Modal> */}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginTop: 22,
    marginBottom: 12,
    paddingBottom: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 5,
  },
  image: {
    width: "100%",
    height: 290,
    marginBottom: 10,
  },
});
