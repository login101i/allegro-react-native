import React, { useState, useEffect } from "react";

import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { COLORS, dummyData, icons, images, SIZES } from "../../../constants";

const Timer = () => {
	const [hours, setHours] = useState(<Text>0</Text>);
	const [minutes, setMinutes] = useState(<Text>0</Text>);
	const [seconds, setSeconds] = useState(<Text>0</Text>);

	var countDownDate = new Date("December 17, 2021 23:00:00").getTime();

	const counDownFunction = () => {
		setInterval(() => {
			var now = new Date().getTime();
			var timeleft = countDownDate - now;

			const hours = Math.floor(
				(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds);
		}, 1000);
	};

	useEffect(() => {
		counDownFunction();
	}, [minutes, hours]);

	return (
		<View style={styles.flexColumn}>
			<Text style={styles.textBig}>Weekendowe okazje kończą się za:</Text>

			<View style={styles.timeContainer}>
				<View style={styles.timeItem}>
					{hours < 10 ? (
						<Text style={styles.text}>0</Text>
					) : (
						<Text style={styles.text}> {hours.toString().charAt(0)}</Text>
					)}
				</View>
				<View style={styles.timeItem}>
					{hours >= 10 ? (
						<Text style={styles.text}> {hours.toString().charAt(1)}</Text>
					) : (
						<Text style={styles.text}> {hours.toString().charAt(0)}</Text>
					)}
				</View>
				<View>
					<Text style={styles.colon}>:</Text>
				</View>
				<View style={styles.timeItem}>
					{minutes < 10 ? (
						<Text style={styles.timeItem}>0</Text>
					) : (
						<Text style={styles.colon}> {minutes.toString().charAt(0)}</Text>
					)}
				</View>
				<View style={styles.timeItem}>
					{minutes >= 10 ? (
						<Text style={styles.text}> {minutes.toString().charAt(1)}</Text>
					) : (
						<Text style={styles.text}> {minutes.toString().charAt(0)}</Text>
					)}
				</View>
				<View>
					<Text style={styles.colon}>:</Text>
				</View>
				<View style={styles.timeItem}>
					{seconds < 10 ? (
						<Text style={styles.text}>0</Text>
					) : (
						<Text style={styles.text}> {seconds.toString().charAt(0)}</Text>
					)}
				</View>
				<View style={styles.timeItem}>
					{seconds >= 10 ? (
						<Text style={styles.text}> {seconds.toString().charAt(1)}</Text>
					) : (
						<Text style={styles.text}> {seconds.toString().charAt(0)}</Text>
					)}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8
	},
	inputContainer: {
		border: "1px solid grey",
		width: "90%",

		marginLeft: 15,
		marginRight: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	input: {
		height: "100%",
		border: "none",
		padding: 6
	},

	categoriesContainer: {
		height: 100
	},
	categoryTitle: {
		textTransform: "uppercase",
		color: COLORS.linkColor,
		display: "flex",
		flexAlign: "center",
		justifyContent: "center",
		fontWeight: 600,
		fontSize: SIZES.body3,
		marginBottom: 7
	},

	bannerContainer: {
		height: 120,
		width: "100%",
		backgroundColor: COLORS.black,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	bannerImg: {
		width: "100%",
		height: "100%",
		objectFit: "cover"
	},

	roundedCatContainer: {
		backgroundColor: COLORS.backgroundColor,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "left"
	},
	flexRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},

	flexColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},

	textBig: {
		fontSize: SIZES.h3,
		fontWeight: 500,
		color: COLORS.white,
		marginTop: 10
	},
	timeContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10
	},
	timeItem: {
		color: COLORS.allegroColor,
		fontSize: 26
	},
	colon: {
		color: COLORS.allegroColor,
		fontSize: 26,
		marginLeft: 5
	},
	text: {
		color: COLORS.allegroColor,
		fontSize: 26
	}
});

export default Timer;
