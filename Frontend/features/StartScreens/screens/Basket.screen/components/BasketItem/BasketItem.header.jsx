import React, { useState } from "react";
import { Flex, Textt } from "../../../../../../components";
import { Checkbox } from "react-native-paper";
import { colors } from "../../../../../../infrasctructure/theme";

export default function BasketItem({ seller = "xyz" }) {
  const [checked, setChecked] = useState(true);

  return (
    <Flex align>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
        color={colors.allegroColor}
      />
      <Textt title={`Przesyłka od ${seller}`} wrap>
        {" "}
      </Textt>
    </Flex>
  );
}
