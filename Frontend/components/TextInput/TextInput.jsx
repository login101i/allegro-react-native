import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Keyboard } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../infrasctructure/theme';
import defaultStyles from '../../config/styles';

export const AppTextInput = ({ icon, color = colors.white, size = 44, width = '100%', title, ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons style={styles.icon} name={icon} color={color} size={size} />}
      <TextInput style={([defaultStyles.text], { color: 'white' }, { width })} onSubmitEditing={Keyboard.dismiss} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 2,
    flexDirection: 'row',
    width: '100%',
    height: 40,
    padding: 2,
    marginVertical: 2,
    borderBottomColor: colors.black,
    borderBottomWidth: 2
  },
  icon: {
    marginRight: 10
  }
});
