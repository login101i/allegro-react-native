// import React from "react";
// import styled from "styled-components/native";
// import { COLORS } from "../constants/theme";
// import { Flex } from "../components";
// import { View, Text } from "react-native";

// const Header = styled.View`
//   display: flex;
//   width: 100%;
//   border-top-color: ${(props) => props.theme.colors.linkColor};
//   border-top-width: 1px;
//   justify-content: space-evenly;
//   min-width: 260px;
//   margin-bottom: 5px;
//   width: 98%;
// `;

// const SpanText = styled.Text`
//   text-transform: uppercase;
//   letter-spacing: 1.25px;
//   text-align: center;
//   padding: 8px;
//   color: ${COLORS.linkColor};
//   cursor: pointer;
//   text-align: center;
//   font-size: 15px;
// `;

// export const BorderAndTitle = (props) => {
//   return (
//     <>
//       {props.border ? (
//         <Flex center>

//           <Header>
//             <SpanText>{props.title || "Zobacz więcej"} </SpanText>
//           </Header>
//         </Flex>
//       ) : (
//         <SpanText>{props.title || "Zobacz więcej"} </SpanText>
//       )}
//     </>
//   );
// };
