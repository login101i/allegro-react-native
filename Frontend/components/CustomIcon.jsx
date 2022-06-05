import React from "react";
import styled from "styled-components/native";
import { Badge } from "react-native-paper";
import { COLORS } from "../constants/theme";

const Icon = styled.View`
  color: grey;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const StyledBadge = styled(Badge)`
  background-color: ${(props) => props.theme.colors.allegroColor};
  padding: 0px 4px;
  right: 0px;
  top: 10px;
  color: "white";
  width: 10px;
  height: 10px;
  border-radius: 5px;
  z-index: 99;
  position: absolute;
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
        <IconName style={{ fontSize: `${size}px`, color: `${color}` }}>
          {" "}
          <StyledBadge badgeContent={badgeContent} />
        </IconName>
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
