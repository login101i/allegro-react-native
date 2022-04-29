import React, { useContext } from "react";
import styled from "styled-components/native";

import { Button, Menu, Divider, Provider } from "react-native-paper";
import { CartContext } from "../../../services/cart/CartContext";

const RemoveMenu = styled(Provider)`
  z-index: 1111;
  width: 100px;
  color: green;
  font-size: 33px;
`;

const More = ({ product }) => {
  console.log(product);
  const [visible, setVisible] = React.useState(false);

  const { cart, removeProduct } = useContext(CartContext);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <RemoveMenu>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>...</Button>}
      >
        <Menu.Item
          onPress={() => {
            console.log("usuwam");
            removeProduct(product);
          }}
          title="Usun"
        />
      </Menu>
    </RemoveMenu>
  );
};

export default More;
