// @ts-nocheck
import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalMenu from './ModalMenu';
import NewPostForm from '../components/NewPostForm';

/**
 * @param {{ style: boolean | import("react-native").TextStyle | import("react-native").RegisteredStyle<import("react-native").TextStyle> | import("react-native").RecursiveArray<false | import("react-native").TextStyle | import("react-native").RegisteredStyle<...>>; title: React.ReactNode; }} props
 */
export default function Header(props) {
  const [isOpen, setOpen] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={props.style}>{props.title}</Text>
      </View>
      <ModalMenu
        visible={isOpen}
        options={[
          {
            title: 'Add Post',
            onPress: () => {
              setOpen(false);
              setFormVisible(true);
            },
          },
        ]}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Modal visible={isFormVisible} animationType="fade" transparent={true}>
        <View style={styles.formContainer}>
          <NewPostForm
            onSubmit={() => {
              setFormVisible(false);
            }}
          />
        </View>
      </Modal>
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.9)"
          style={styles.menuButtonContainer}
          onPress={() => {
            setOpen(true);
          }}>
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
  modalOpacity: {
    flex: 1,
    backgroundColor: 'rgba(100,100,100, 0.5)',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,100,100, 0.5)',
  },
});
