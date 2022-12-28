// import React from "react";
// import styled from "styled-components/native";

// import { View, Text } from "react-native";

// const TextContainer = styled.Text`
//   font-size: 14px;
//   font-size: ${(props) => props.size}px;
//   margin: 0px 5px;
//   color: ${(props) =>
//     props.color ? props.color : props.theme.colors.textColor};
//   font-weight: ${(props) => (props.bold ? "900" : "600")};
//   white-space: pre-wrap;
//   border-width: 100%;
//   white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
//   margin-top: ${(props) => props.marginTop};
//   border-bottom-width: ${(props) => props.borderBottom && "11px"};
//   border-bottom-color: ${(props) => props.borderBottom && "purple"};

//   text-align: ${(props) => (props.textAlign ? "center" : "left")};
//   border-radius: ${(props) => (props.background ? "4px" : "")};
//   width: ${(props) => (props.fullWidth ? "100%" : "auto")};
//   text-transform: ${(props) => (props.upperCase ? "uppercase" : "")};
//   &:hover {
//     color: ${(props) => props.hovered && "var(--linkColor)"};
//     cursor: ${(props) => props.hovered && "pointer"};
//   }
//   :first-letter {
//     text-transform: capitalize;
//   }
// `;

// const SubTitle = styled.Text`
//   font-size: 14px;
//   display: flex;
//   flex-wrap: wrap;
//   white-space: wrap;
//   color: ${(props) => (props.color ? props.color : "darkGrey")};
//   justify-content: ${(props) => (props.textAlign ? props.textAlign : "left")};
//   white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
//   white-space: pre-wrap;
// `;

// export const Textt = ({
//   title = "",
//   size,
//   marginTop,
//   bold,
//   children,
//   subTitle = "",
//   color,
//   borderBottom,
//   hovered,
//   onClick,
//   wrap,
//   textAlign,
//   style,
//   background,
//   fullWidth,
//   borderBottomColor,
//   borderBottomWidth,
//   upperCase
// }) => {
//   return (
//     <TextContainer
//       size={title ? 18 : size}
//       marginTop={marginTop}
//       bold={bold}
//       color={color}
//       borderBottom={borderBottom}
//       hovered={hovered}
//       onClick={onClick}
//       wrap={wrap}
//       textAlign={textAlign}
//       style={style}
//       background={background}
//       borderBottomColor={borderBottomColor}
//       borderBottomWidth={borderBottomWidth}
//       upperCase={upperCase}
//     >
//       <Text>
//         {title}
//         {children}
//         {subTitle && (
//           <SubTitle color={color} textAlign={textAlign}>
//             {subTitle}
//           </SubTitle>
//         )}
//       </Text>
//     </TextContainer>
//   );
// };
