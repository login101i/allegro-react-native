import React, { useState } from "react";
import { StyleSheet, CheckBox } from "react-native";

import * as Yup from "yup";

import { COLORS } from "../../constants";
import AppButton from "../../components/AppButton";
import { Flex, Textt } from "../../components";

import { AppForm, SubmitButton, AppFormField } from "../../components/forms";

const RegisterScreen = () => {
	const [isSelected, setSelection] = useState(false);

	const validationSchema = Yup.object().shape({
		email: Yup.string().required().label("Email"),
		password: Yup.string().min(5).required().label("Password")
	});

	return (
		<Flex column align center flexOne>
			<Textt tile="Allegro" />

			<Flex center column align width="70%">
				<AppForm
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => console.log(values)}
				>
					<Textt> e-mail</Textt>
					<AppFormField
						name="email"
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
						TexttContentType="emailAddress"
					/>

					<Textt>Haslo</Textt>
					<AppFormField
						name="password"
						secureTexttEntry
						autoCapitalize="none"
						TexttContentType="password"
					/>
				

					<Textt>Powtórz hasło</Textt>
					<AppFormField
						name="password"
						secureTexttEntry
						autoCapitalize="none"
						TexttContentType="password"
					/>
					<SubmitButton
						title="zarejestruj się"
						buttonColor={COLORS.backgroundColorFaded}
						smallLetters="uppercase"
					/>
				</AppForm>


				<Flex space>
					<Textt title="mam juz konto" color={COLORS.linkColor} />
				</Flex>

				<Textt align wrap>
					Rejestrując się do Allego akceptujesz Regulamin w aktualnym brzmieniu
					obowiązująym od dnia 25 paź 2021. Informacje o planowanych oraz
					archiwalnych zmianach Regulaminu są dostępne na stronie.
				</Textt>
			</Flex>
		</Flex>
	);
};

export default RegisterScreen;
