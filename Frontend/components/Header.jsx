// import React, { useContext } from "react";
// import { Appbar } from "react-native-paper";
// import { Textt, Flex } from "../components";
// import styled from "styled-components/native";
// import BasketHeaderSteps from "../features/StartScreens/screens/Basket.screen/components/BasketHeaderSteps";

// const Container = styled(Appbar)`
//   width: 100%;
//   padding: 10px 10px;
//   display: flex;
//   background-color: white;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Header = ({ goBack, title = "", headerBottom }) => {
//   const _goBack = () => console.log("Went back");

//   const _handleSearch = () => console.log("Searching");

//   const _handleMore = () => console.log("Shown more");

//   return (
//     <Flex column >
//       <Container>
//         <Flex align>
//           {goBack && <Appbar.BackAction onPress={goBack} />}
//           <Textt>{title}</Textt>
//         </Flex>
//         <Flex flexEnd>
//           <Appbar.Action icon="share-variant" onPress={_handleMore} />
//           <Appbar.Action icon="find-replace" onPress={_handleSearch} />
//           <Appbar.Action icon="shopping" onPress={_handleMore} />
//         </Flex>
//       </Container>

//       {headerBottom && <BasketHeaderSteps />}
//     </Flex>
//   );
// };

// export default Header;
