import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function FormPicker({
	items,
	color,
	icon,
	name,
	numColumns,
	placeholder,
	PickerItemComponent,
	width,
}) {
	const { errors, touched, setFieldValue, values } = useFormikContext();

	return (
		<View>
			<AppPicker
				items={items}
				numColumns={numColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				color={color}
				icon={icon}
				width={width}
			/>
			<ErrorMessage name={errors[name]} visilbe={touched[name]} />
		</View>
	);
}

const styles = StyleSheet.create({});
