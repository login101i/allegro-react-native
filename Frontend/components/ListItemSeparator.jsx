import React from "react";
import { StyleSheet, View } from "react-native";

import {COLORS} from "../constants";

export default function LIstItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "90%",
    height: 2,
    backgroundColor: COLORS.lightGrey,
  },
});
