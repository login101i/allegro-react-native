import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../constants";

export default function AppButton({ title, buttonColor = COLORS.darkGray, onPress, textColor = "lightGray", iconName, smallLetters, fontSize = "30" }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, { backgroundColor: buttonColor }]}>
        <MaterialCommunityIcons name={iconName} color="white" size={25} />
        <Text style={[styles.buttonText, { color: COLORS[textColor], textTransform: smallLetters, fontSize: fontSize }]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginVertical: 2,
    flexDirection: "row",
    border: "none",
    borderWidth: 0,
    marginVertical: 6,
    cursor: "pointer",
  },
  buttonText: {
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 11,
    fontWeight: 600,
  },
});
