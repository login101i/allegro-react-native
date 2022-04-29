import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import {COLORS} from "../constants";

export default function UploadScreen({
	progress = 0,
	visible = false,
	onDone,
}) {
	return (
		<Modal visible={visible} style={styles.modal}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar color={COLORS.purple} progress={progress} width={222} />
				) : (
					<LottieView
						source={require("../assets/animation/done.json")}
						autoPlay
						loop={false}
						style={styles.lottieView}
						onAnimationFinish={onDone}
					/>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	modal: {
		width: "100%",
		height: "100%",
	},
	lottieView: {
		width: 100,
		height: 100,
	},
});
