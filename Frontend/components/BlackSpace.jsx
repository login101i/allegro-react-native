import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants";
import styled from "styled-components/native";

const Container = styled.View`
	height: ${(props) => props.height};
`;

const Space = ({ height = "15px" }) => {
	return <Container height={height}></Container>;
};

export default Space;
