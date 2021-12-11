import React from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS, dummyData, icons, images, SIZES } from "../../../constants";

const Header = () => {
	return (
		<View
			style={{
				width: "100%",
				height: 80,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: 15,
				marginBottom: 33
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%"
				}}
			>
				<Text
					style={{
						textAlign: "center",
						fontSize: SIZES.h2,
						fontWeight: 500,
						color: COLORS.lightGray
					}}
				>
					Witaj Maciej!
				</Text>

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center"
					}}
				>
					<TouchableOpacity
						style={{
							width: 40,
							height: 35,
							tintColor: COLORS.lightGray,
							marginLeft: 25
						}}
						onPress={() => console.log("click")}
					>
						<Image
							source={icons.settings}
							resizeMode="contain"
							style={{ flex: 1, tintColor: COLORS.lightGray, marginLeft: 5 }}
						/>
					</TouchableOpacity>

					<Image
						source={icons.star}
						resizeMode="contain"
						style={{
							width: 35,
							height: 35,
							tintColor: COLORS.lightGray,
							marginLeft: 25
						}}
					/>
					<Image
						source={icons.home}
						resizeMode="contain"
						style={{
							width: 35,
							height: 35,
							tintColor: COLORS.lightGray,
							marginLeft: 25
						}}
					/>
				</View>
			</View>

			<View
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 10,
					marginBottom: 10
				}}
			>
				{/* -----------------------*/}
				<View
					style={{
						width: 60,
						height: 30,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "brown",
						marginRight: 10
					}}
				>
					<Text style={{ color: COLORS.lightGray }}>4</Text>
					<Image
						source={icons.star}
						style={{
							tintColor: COLORS.secondary,
							marginLeft: 5,
							width: 20,
							height: 20
						}}
					/>
				</View>
				{/* -----------------------*/}
				<View
					style={{
						width: 120,
						height: 30,
						display: "flex",
						flexDirection: "row",

						alignItems: "center",
						justifyContent: "center",
						backgroundColor: COLORS.primary,
						marginRight: 10
					}}
				>
					<Text style={{ color: COLORS.lightGray }}>4</Text>
					<Image
						source={icons.star}
						style={{
							tintColor: COLORS.secondary,
							marginLeft: 5,
							width: 20,
							height: 20
						}}
					/>
				</View>
				{/* -----------------------*/}
				<View
					style={{
						width: "auto",
						height: 30,
						display: "flex",
						flexDirection: "row",

						alignItems: "center",
						justifyContent: "center",
						backgroundColor: COLORS.lightBlue,
						marginRight: 10,
						paddingHorizontal: 4
					}}
				>
					<Text style={{ color: COLORS.lightGray }}>3 876, 01 zł</Text>
					<Image
						source={icons.star}
						style={{
							tintColor: COLORS.secondary,
							marginLeft: 5,
							width: 20,
							height: 20
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default Header;
