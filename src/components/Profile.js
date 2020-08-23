import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import React, {useState} from 'react';

export default function Profile() {
  const [state, setState] = useState({nombre: ''});
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>{state.nombre}</Text>
          <Button
            title="Soy un boton"
            onPress={() => {
              setState({nombre: 'Ivan'});
            }}
          />
          <Text>ASD</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
});
