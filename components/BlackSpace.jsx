import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants";

const BlackSpace = () => {
	return <View style={style.container}></View>;
};

const style = StyleSheet.create({
	container: {
		height: 15,
		backgroundColor: COLORS.blackSpace
	}
});

export default BlackSpace;
