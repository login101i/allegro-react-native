import React, { useState, useContext } from 'react';
import { Flex, Textt } from '../../../../../../components';
import { Divider, Appbar, Menu, Provider, Checkbox } from 'react-native-paper';
import { colors } from '../../../../../../infrasctructure/theme';
import { CartContext } from '../../../../../../services/cart/CartContext';
export default function BasketItem({ title = 'przesylka od xyz', setVisible, visible, item }) {
  // const [visible, setVisible] = useState(formControlLabelClasses);
  const [checked, setChecked] = useState(true);

  const { excludeProduct, cart, calculateSum } = useContext(CartContext);

  const handleCheck = () => {
    setChecked((prev) => !prev);
    setVisible((prev) => !prev);
  };

  return (
    <Flex align space>
      <Checkbox status={visible ? 'checked' : 'unchecked'} onPress={handleCheck} color={colors.allegroColor} />

      <Textt wrap>{title}</Textt>
      <Flex>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.Action icon="dots-vertical" onPress={() => setVisible(true)} />
        </Appbar.Header>
        {/* <Provider style={{ backgroundColor: 'white' }}>
          <Menu visible={visible} onDismiss={() => setVisible(false)} anchor={{ x: -200, y: 60 }}>
            <Menu.Item onPress={null} title="usun" icon="content-cut" />
            <Divider />
          </Menu>
        </Provider> */}
      </Flex>
    </Flex>
  );
}
