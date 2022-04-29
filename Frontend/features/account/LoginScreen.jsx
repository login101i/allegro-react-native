import React, { useState } from "react";
import { StyleSheet, CheckBox } from "react-native";

import * as Yup from "yup";

import { COLORS } from "../../constants";
import {AppButton} from "../../components";
import { Flex, Textt } from "../../components";

import { AppForm, SubmitButton, AppFormField } from "../../components/forms";

const LoginScreen = () => {
	const [isSelected, setSelection] = useState(false);

	const validationSchema = Yup.object().shape({
		email: Yup.string().required().label("Email"),
		password: Yup.string().min(5).required().label("Password")
	});

	return (
		<Flex column align center flexOne>
			<Textt tile="Allegro" />
			<Flex>
				<Flex>
					<CheckBox value={isSelected} onValueChange={setSelection} center />
					<Textt>Login lub e-mail</Textt>
				</Flex>

				<Flex>
					<CheckBox value={isSelected} onValueChange={setSelection} />
					<Textt>Numer telefonu</Textt>
				</Flex>
			</Flex>
			<Flex center column align width="80%">
				<AppForm
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => console.log(values)}
				>
					<Textt>Login lub e-mail</Textt>
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
					<SubmitButton
						title="zaloguj się"
						buttonColor={COLORS.backgroundColorFaded}
						smallLetters="uppercase"
					/>
				</AppForm>

				<Textt>lub</Textt>
				<AppButton
					iconName="facebook"
					title="Zaloguj się przez Facebook"
					TexttColor="white"
					buttonColor={COLORS.fbColor}
				/>
				<AppButton
					iconName="google"
					title="Zaloguj się przez Google"
					color={COLORS.darkGray}
				/>
				<Flex space>
					<Textt color={COLORS.linkColor} size={16}>
						Zarejestruj się{" "}
					</Textt>
					<Textt color={COLORS.linkColor} size={16}>
						Nie pamiętam hasła
					</Textt>
				</Flex>

				<Textt align wrap size={14}>
					Logując się do Allego akceptujesz Regulamin w aktualnym brzmieniu
					obowiązująym od dnia 25 paź 2021. Informacje o planowanych oraz
					archiwalnych zmianach Regulaminu są dostępne na stronie.
				</Textt>
			</Flex>
		</Flex>
	);
};

export default LoginScreen;
