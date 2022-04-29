import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import {
	AppForm as Form,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton,
} from "../components/forms";
import Screen from "./Screen";
import categoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";


const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
	{
		id: 1,
		label: "Furniture",
		value: 1,
		backgroundColor: "green",
		icon: "facebook",
	},
	{
		id: 2,
		label: "Clothing",
		value: 2,
		backgroundColor: "green",
		icon: "email",
	},
	{
		id: 3,
		label: "Camera",
		value: 3,
		backgroundColor: "green",
		icon: "lock",
	},
	{
		id: 1,
		label: "Furniture",
		value: 1,
		backgroundColor: "green",
		icon: "facebook",
	},
	{
		id: 2,
		label: "Clothing",
		value: 2,
		backgroundColor: "green",
		icon: "email",
	},
	{
		id: 3,
		label: "Camera",
		value: 3,
		backgroundColor: "green",
		icon: "lock",
	},
	{
		id: 1,
		label: "Furniture",
		value: 1,
		backgroundColor: "green",
		icon: "facebook",
	},
	{
		id: 2,
		label: "Clothing",
		value: 2,
		backgroundColor: "green",
		icon: "email",
	},
	{
		id: 3,
		label: "Camera",
		value: 3,
		backgroundColor: "green",
		icon: "lock",
	},
];

function ListingEditScreen() {
	const location = useLocation();



	return (
		<Screen style={styles.container}>
			<Form
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: [],
				}}
				onSubmit={(values) => console.log(location)}
				validationSchema={validationSchema}
			>
				<FormImagePicker
					name="images"
					showAlertFunc={(value) => showAlertFunc(value)}
				/>

				<FormField maxLength={255} name="title" placeholder="Title" />
				<FormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
				/>
				<Picker
					items={categories}
					name="category"
					placeholder="Category"
					width="50%"
					// PickerItemComponent={categoryPickerItem}
					// numColumns={3}
				/>
				<FormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Wyślij" />
			</Form>
			
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
export default ListingEditScreen;
