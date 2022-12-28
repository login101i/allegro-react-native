import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Textt } from '..';

import { render } from 'react-dom';
import { COLORS } from '../../constants';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions, textColor }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={COLORS.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.nameDetails}>
            <View style={styles.name}>
              <Textt numberOfLines={1}>{title}</Textt>
              {subTitle && (
                <Textt textColor={textColor} numberOfLines={3}>
                  {subTitle}
                </Textt>
              )}
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" color={COLORS.darkGrey} size={22} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  name: {
    flexDirection: 'column',
    marginTop: 0
  },
  nameDetails: {
    marginLeft: 10,
    flex: 1,
    alignItems: 'flex-start'
  }
});
