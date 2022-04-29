import React from 'react'
import { useFormikContext } from 'formik';

import {AppButton} from '../../components'

const SubmitButton = ({title, buttonColor, smallLetters, textColor}) => {
    const {handleSubmit}=useFormikContext()

    return (
    <AppButton title={title}
     buttonColor={buttonColor}
      smallLetters={smallLetters} onPress={handleSubmit}
      textColor={textColor}
      />
    )
}

export default SubmitButton
