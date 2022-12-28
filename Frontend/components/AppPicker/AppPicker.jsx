import React, { useState } from 'react';
import { Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import defaultStyles from '../../config/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AppButton } from '..';
import { Textt } from '..';
import Screen from '../../screens/Screen';
import PickerItem from '../PickerItem';
import { Container, ArrowDownIcon } from './AppPicker.styles';

export const AppPicker = ({
  icon,
  items,
  color = '#0c0c0c',
  size = 44,
  numColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = '100%'
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Container>
          {icon && <MaterialCommunityIcons name={icon} color={color} size={size} />}
          {selectedItem ? (
            <Textt textColor={defaultStyles.COLORS.darkGray}>{selectedItem.label}</Textt>
          ) : (
            <Textt textColor={defaultStyles.COLORS.darkGray}>placeholder here</Textt>
          )}
          <ArrowDownIcon>
            <MaterialCommunityIcons name="chevron-down" color={COLORS.dark} size={32} />
          </ArrowDownIcon>
        </Container>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            numColumns={numColumns}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
          <AppButton
            title="zamknij"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </Screen>
      </Modal>
    </>
  );
};
