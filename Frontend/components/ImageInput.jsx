import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AwesomeAlert from "react-native-awesome-alerts";

import { COLORS } from "../constants";

function ImageInput({ imageUri, onChangeImage, funcShowAlert }) {
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		requestPermission();
	}, []);

	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!granted) alert("You need to enable permission to access the library.");
	};

	const handlePress = () => {
		console.log("klick");
		if (!imageUri) selectImage();
		else funcShowAlert([true, imageUri]);
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			console.log(result.uri);
			onChangeImage(result.uri);
		} catch (error) {
			console.log("Error reading an image", error);
		}
	};

	return (
		<View>
			<TouchableWithoutFeedback onPress={handlePress}>
				<View style={styles.container}>
					{!imageUri && (
						<MaterialCommunityIcons
							color={COLORS.purple}
							name="camera"
							size={40}
						/>
					)}
					{imageUri && (
						<Image source={{ uri: imageUri }} style={styles.image} />
					)}
				</View>
			</TouchableWithoutFeedback>
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: COLORS.lightGray,
		borderRadius: 15,
		height: 100,
		justifyContent: "center",
		marginVertical: 10,
		overflow: "hidden",
		width: 100,
	},
	image: {
		height: "100%",
		width: "100%",
	},
});

export default ImageInput;
