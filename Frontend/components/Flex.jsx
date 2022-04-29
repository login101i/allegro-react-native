import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};
	justify-content: ${(props) => (props.space ? "space-between" : "")};
	justify-content: ${(props) => (props.center ? "center" : "")};
	align-items: ${(props) => (props.align ? "center" : "left")};
	margin: 4px 0px;
	width: ${(props) => (props.width ? props.width : "auto")};
	border-top: ${(props) => (props.borderTop ? "1px solid lightGrey " : "")};
	color: ${(props) => (props.color ? props.color : "black")};
	flex: ${(props) => (props.flexOne ? 1 : "none")};
`;

export const Flex = ({
	space,
	style,
	align,
	column,
	fullWidth,
	borderTop,
	center,
	children,
	color,
	width,
	flexOne
}) => {
	return (
		<Container
			style={style}
			space={space}
			align={align}
			column={column}
			fullWidth={fullWidth}
			borderTop={borderTop}
			center={center}
			color={color}
			width={width}
			flexOne={flexOne}
		>
			{children}
		</Container>
	);
};
