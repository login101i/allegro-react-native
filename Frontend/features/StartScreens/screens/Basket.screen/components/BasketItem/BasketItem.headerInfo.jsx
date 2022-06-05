import React, { useState } from "react";
import { Flex, Textt } from "../../../../../../components";
import { Divider, Appbar, Menu, Provider, Checkbox } from "react-native-paper";
import { colors } from "../../../../../../infrasctructure/theme";
import { formControlLabelClasses } from "@mui/material";
export default function BasketItem({ title = "przesylka od xyz" }) {
  const [visible, setVisible] = useState(formControlLabelClasses);
  const [checked, setChecked] = useState(true);
  return (
    <Flex align space>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
        color={colors.allegroColor}
      />

      <Textt wrap >{title}</Textt>

      <Flex>
        <Appbar.Header style={{ backgroundColor: "white" }}>
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => setVisible(true)}
          />
        </Appbar.Header>
        <Provider style={{ backgroundColor: "white" }}>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={{ x: -200, y: 60 }}
          >
            <Menu.Item onPress={null} title="usun" icon="content-cut" />
            <Divider />
          </Menu>
        </Provider>
      </Flex>
    </Flex>
  );
}
