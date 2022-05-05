import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) =>
    props.center ? "center" : props.space ? "space-between" : ""};
  align-items: ${(props) => (props.align ? "center" : "left")};
  margin: 0px 3px;
  width: ${(props) => (props.width ? props.width : "auto")};
  border-top: ${(props) => (props.borderTop ? "1px solid lightGrey " : "")};
  color: ${(props) => (props.color ? props.color : "black")};
  flex: ${(props) => (props.flexOne ? 1 : "none")};
  border-bottom-width: ${(props) =>
    props.borderBottomWidth ? props.borderBottomWidth : ""};
  border-bottom-color: ${(props) =>
    props.borderBottomColor ? props.borderBottomColor : ""};
  background-color: white;
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
  flexOne,
  borderBottomColor,
  borderBottomWidth,
  direction
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
      borderBottomColor={borderBottomColor}
      borderBottomWidth={borderBottomWidth}
    >
      {children}
    </Container>
  );
};
