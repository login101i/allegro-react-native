import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import {COLORS} from '../constants'

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.viewContainer, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:COLORS.backgroundColor,
    flex: 1,

  },
  viewContainer:{
    flex:1
  }
});

export default Screen;
