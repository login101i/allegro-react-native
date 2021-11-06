import React from "react";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from 'formik'

const FormField = ({name, width, ...otherProps}) => {
const {handleChange,  errors, setFieldTouched, touched } = useFormikContext();
	return (
		<>
			<TextInput
				// autoCapitalize="none"
				// autoCorrect={false}
				// keyboardType="email-address"
				// textContentType="emailAddress"
                {...otherProps}
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
				width={width}
			/>

			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default FormField;


