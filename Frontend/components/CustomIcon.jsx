import React from "react";
import styled from "styled-components";

import { Badge } from "react-native-paper";
import { COLORS } from "../constants/theme";

const Icon = styled.div`
	color: grey;
	font-size: 30px;
	cursor: pointer;
	margin-right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
    border:2px solid black;
`;

const StyledBadge = styled(Badge)`
	backgroundcolor: theme.colors.allegroColor;
	padding: 0px 4px;
	right: -2px;
	top: 30px;
	color: "white";
`;

export const CustomIcon = ({
	badgeContent,
	size = 30,
	icon,
	color = COLORS.black
}) => {
	const IconName = icon;

	return (
		<Icon>
			{badgeContent ? (
				<StyledBadge badgeContent={badgeContent}>
					<IconName style={{ fontSize: `${size}px`, color: `${color}` }} />
				</StyledBadge>
			) : (
				<IconName
					style={{
						fontSize: `${size}px`,
						color: `${color}`,
						textAlign: "center"
					}}
				/>
			)}
		</Icon>
	);
};
