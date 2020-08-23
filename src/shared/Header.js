// @ts-check
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * @param {{ style: boolean | import("react-native").TextStyle | import("react-native").RegisteredStyle<import("react-native").TextStyle> | import("react-native").RecursiveArray<false | import("react-native").TextStyle | import("react-native").RegisteredStyle<...>>; title: React.ReactNode; }} props
 */
export default function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={props.style}>{props.title}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.9)"
          style={styles.menuButtonContainer}
          onPress={() => {}}>
          <Icon name={'bars'} size={20} style={styles.menuButton} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDAC1',
    width: '100%',
  },
  buttonWrapper: {
    position: 'absolute',
    right: 0,
  },
  menuButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  menuButton: {
    textAlign: 'center',
    paddingRight: 10,
  },
});
