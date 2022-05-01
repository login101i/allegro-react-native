import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";

import { colors, SIZES } from "../../../infrasctructure/theme";
import { Textt, Flex } from "../../../components";

const CategoryContainer = styled.View`
height:${(props) => props.height};
width:${(props) => props.width};
border-bottom-width:${(props) => props.borderBottomWidth};
border-bottom-color:${(props) => props.borderBottomColor};
height:${(props) => props.height}
diplay:flex;
flex-direction:${(props) => (props.flexDirection ? "column" : "row")}
justify-content: flex-start;
align-items:center;
margin:0px 1px;
`;

const Category = ({
  icon,
  title,
  borderBottomColor,
  borderBottomWidth,
  borderLeftColor,
  borderLeftWidth,

  width = "25vw",
  height = "auto",
  flexDirection = "column"
}) => {
  return (
    <TouchableOpacity>
      <Flex
        column
        align
        borderBottomColor={borderBottomColor}
        borderBottomWidth={borderBottomWidth}
        style={{ paddingBottom: "10px", margin: "1px" }}
      >
        <CategoryContainer
          flexDirection={flexDirection}
          borderLeftColor={borderLeftColor}
          borderLeftWidth={borderLeftWidth}
          width={width}
          height={height}
        >
          <Image
            source={icon}
            style={{
              tintColor: colors.darkGray,
              width: 35,
              height: 35,
              padding: 5,
              marginBottom: 10
            }}
          />
        </CategoryContainer>
        <Textt align size={9} color="gray" bold>
          {title}
        </Textt>
      </Flex>
    </TouchableOpacity>
  );
};

export default Category;
