import React from 'react';

import { AppTextInput } from '../../components';
import { ErrorMessage } from '../forms';
import { useFormikContext } from 'formik';

const FormField = ({ name, width, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <AppTextInput onChangeText={handleChange(name)} onBlur={() => setFieldTouched(name)} width={width} {...otherProps} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
