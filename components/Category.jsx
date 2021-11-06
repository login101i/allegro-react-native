import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";

const Category = ({ icon, text, borderColor }) => {
  return (
    <TouchableOpacity>
      <View style={{ borderBottomColor: borderColor, height: 90, width: "25vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderBottomWidth: 6, marginRight: 1 }}>
        <Image source={icon} style={{ tintColor: COLORS.lightGray, width: 50, height: 50 }} />
        <Text style={{ fontSize: SIZES.medium, color: COLORS.lightGray }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

 
});

export default Category;
