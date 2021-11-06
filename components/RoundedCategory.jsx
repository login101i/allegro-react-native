import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { COLORS } from "../constants";

const RoundedCategory = ({ image, text }) => {
  return (
    <View style={styles.imgContainer}>
      <Image source={image} style={styles.roundImg} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "28vw",
  },
  roundImg: {
    width: 88,
    height: 88,
  },
  text: {
    color: COLORS.white,
    textAlign: "center",
  },
});
export default RoundedCategory;
