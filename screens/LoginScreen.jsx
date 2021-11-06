import React, { useState } from "react";
import { StyleSheet, CheckBox, View, Text } from "react-native";

import * as Yup from "yup";

import { COLORS, SIZES, FONTS } from "../constants";
import Screen from "./Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import SimpleText from "../components/SimpleText";

import {AppForm, SubmitButton, AppFormField} from "../components/forms";

const LoginScreen = () => {
	const [isSelected, setSelection] = useState(false);

	const validationSchema = Yup.object().shape({
		email: Yup.string().required().label("Email"),
		password: Yup.string().min(5).required().label("Password"),
	});

	return (
		<Screen style={styles.background}>
			<Text style={styles.logo}>allegro</Text>
			<View style={styles.checkBoxContainer}>
				<View style={styles.flexRow}>
					<CheckBox
						value={isSelected}
						onValueChange={setSelection}
						style={styles.checkbox}
						center
					/>
					<Text style={{ ...FONTS.h3, marginRight: 30 }}>Login lub e-mail</Text>
				</View>

				<View style={styles.flexRow}>
					<CheckBox
						value={isSelected}
						onValueChange={setSelection}
						style={styles.checkbox}
					/>
					<Text style={{ ...FONTS.h3 }}>Numer telefonu</Text>
				</View>
			</View>
			{/* // Formik ------------------------------------------------ */}
			<AppForm
				validationSchema={validationSchema}
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
			>
				<Text style={styles.textSmall}>Login lub e-mail</Text>
				<AppFormField
					name="email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					textContentType="emailAddress"
				/>

				<Text style={styles.textSmall}>Haslo</Text>
				<AppFormField
					name="password"
					secureTextEntry
					autoCapitalize="none"
					textContentType="password"
				/>
				<SubmitButton
					title="zaloguj się"
					buttonColor={COLORS.backgroundColorFaded}
					smallLetters="uppercase"
				/>
			</AppForm>
			<Text style={[styles.textSmall, styles.flexRow, { marginVertical: 11 }]}>
				lub
			</Text>
			<AppButton
				iconName="facebook"
				title="Zaloguj się przez Facebook"
				textColor="white"
				buttonColor={COLORS.fbColor}
			/>
			<AppButton
				iconName="google"
				title="Zaloguj się przez Google"
				color={COLORS.darkGray}
			/>
			<View
				style={[
					styles.flexRow,
					{ justifyContent: "space-between", marginVertical: 30 },
				]}
			>
				<AppText title="zarejestruj się" textColor={COLORS.linkColor} />
				<AppText title="nie pamiętam hasła" textColor={COLORS.linkColor} />
			</View>
			<View
				style={{
					backgroundColor: COLORS.backgroundColor,
					flex: 1,
					flexGrow: "grow",
					justifyContent: "flex-end",
					margin: -10,
					padding: 16,
				}}
			>
				<SimpleText smallText textAlign="center" numberOfLines={4} >
					Logując się do Allego akceptujesz Regulamin w aktualnym brzmieniu
					obowiązująym od dnia 25 paź 2021. Informacje o planowanych oraz
					archiwalnych zmianach Regulaminu są dostępne na stronie.
				</SimpleText>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: COLORS.backgroundColor,
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		paddingTop: 100,
		paddingHorizontal: 10,
		margin: 0,
	},
	logo: {
		fontSize: 55,
		color: COLORS.allegroColor,
		marginBottom: 20,
		width: "100%",
		textAlign: "center",
	},

	textLink: {
		color: COLORS.linkColor,
		textTransform: "uppercase",
	},

	checkBoxContainer: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		marginBottom: 30,
	},
	checkbox: {
		marginRight: 20,
	},
	flexRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	textSmall: {
		color: "white",
		fontSize: SIZES.h4,
		marginLeft: 10,
	},
	loginButton: {
		backgroundColor: COLORS.darkGray,
		color: COLORS.lightGray,
		color: "red",
		marginTop: 45,
	},
});

export default LoginScreen;
