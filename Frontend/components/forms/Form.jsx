import React from "react";
import { Formik } from "formik";
import { View } from "react-native";

const Form = ({ validationSchema, initialValues, children, onSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
};

export default Form;
