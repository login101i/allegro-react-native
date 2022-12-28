import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Textt } from '../../components';

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View>
      <Textt color="red">{error}</Textt>
    </View>
  );
}

const styles = StyleSheet.create({});
