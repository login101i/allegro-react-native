import React from "react";
import styled from "styled-components";

import { Dimensions, ScrollView } from "react-native";

import SimpleImageSlider from "react-simple-image-slider";

const Sider = ({ images }) => {
	const windowWidth = Dimensions.get("window").width;

	const Image = styled.img`
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	const ImageContainer = styled.div`
		height: 400px;
		width: 411px;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	var imagesArray = [];

	for (var i = 0; i < images.length; i++) {
		imagesArray.push({ url: images[i].url });
	}

	console.log(imagesArray);

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{imagesArray.map((image) => (
				<ImageContainer key={image.url}>
					<Image src={image.url} />
				</ImageContainer>
			))}
		</ScrollView>
	);
};

export default Sider;
