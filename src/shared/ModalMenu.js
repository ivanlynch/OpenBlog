import React from 'react';
import {Modal, View, Button, StyleSheet} from 'react-native';

/**
 * @param {{ visible: boolean; options: any[]; onCancel: (ev: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void; }} props
 */
export default function ModalMenu(props) {
  return (
    console.log(props.options),
    (
      <Modal
        visible={props.visible}
        animationType="fade"
        transparent={true}
        presentationStyle="overFullScreen">
        <View style={styles.modalContainer}>
          <View style={styles.menuContainer}>
            <View style={styles.menuButtonWrapper}>
              {props.options.map((button, index) => (
                <View style={styles.button} key={`modalButton$${index}`}>
                  <Button
                    key={`modalButton$${index}`}
                    title={button.title}
                    onPress={button.onPress}
                  />
                </View>
              ))}
            </View>

            <View style={styles.closeMenuButton}>
              <Button title="Cerrar" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    )
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,100,100, 0.5)',
    height: 100,
  },
  menuContainer: {
    height: '37%',
    width: '100%',
    justifyContent: 'center',
  },
  menuButtonWrapper: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    margin: 10,
    marginBottom: 5,
  },
  closeMenuButton: {
    height: '15%',
    margin: 10,
    marginTop: 5,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  button: {
    margin: 10,
  },
});
