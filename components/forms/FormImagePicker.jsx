import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name, showAlertFunc }) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	const imageUris = values[name];
	const [showIt, setShowIt] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [imageUriToRemove, setImageUriToRemove] = useState();

	console.log(showIt);

	const [deleteImage, setDeletImage] = useState(false);
	console.log(showAlert);

	const handleAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setFieldValue(
			name,
			imageUris.filter((imageUri) => imageUri !== uri)
		);
	};
	useEffect(() => {
		handleRemove(imageUriToRemove);
	}, [deleteImage]);


	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				showAlertFunc={(showIt) => showAlertFunc(showIt)}
				funcShowAlert={(tablica) => {
					setShowAlert(tablica[0]);
					setImageUriToRemove(tablica[1]);
					if (deleteImage) handleRemove(imageUriToRemove);
				}}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
			<View style={styles.alertContainer}>
				<AwesomeAlert
					show={showAlert}
					showProgress={false}
					title="AwesomeAlert"
					message="I have a message for you!"
					closeOnTouchOutside={true}
					closeOnHardwareBackPress={false}
					showCancelButton={true}
					showConfirmButton={true}
					cancelText="No, cancel"
					confirmText="Yes, delete it"
					confirmButtonColor="#DD6B55"
					onCancelPressed={() => {
						setShowAlert(false);
					}}
					onConfirmPressed={() => {
						setDeletImage(true);
						setShowAlert(false);
					}}
					
				/>
				;
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	alertContainer:{
		zIndex:44,
	}
})

export default FormImagePicker;
