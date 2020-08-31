import React from 'react';
import {View, Text} from 'react-native';

/**
 * @param {any} props
 */
export default function EmptyList(props) {
  return (
    <View key="emptyList">
      <Text>Empty List</Text>
    </View>
  );
}
