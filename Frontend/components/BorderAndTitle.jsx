import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/theme";

const Header = styled.div`
	display: flex;
	width: 100%;
	border-top: 1px solid ${COLORS.backgroundColor};
	justify-content: space-evenly;
	min-width: 260px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const SpanText = styled.span`
	text-transform: uppercase;
	letter-spacing: 1.25px;
	text-align: center;
	padding: 5px;
	color: ${COLORS.linkColor};
	cursor: pointer;
	text-align: center;
	font-size: 18px;
`;

export const BorderAndTitle = (props) => {
	return (
		<>
			{props.border ? (
				<Header>
					<SpanText>{props.title || "Zobacz więcej"} </SpanText>
				</Header>
			) : (
				<SpanText>{props.title || "Zobacz więcej"} </SpanText>
			)}
		</>
	);
};
