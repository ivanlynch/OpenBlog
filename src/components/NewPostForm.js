import {SafeAreaView, Text, View, Button} from 'react-native';

import React, {useState} from 'react';

export const NewPostForm = (props) => {
  const [state, setState] = useState({nombre: ''});
  return (
    <SafeAreaView>
      <View>
        <Text>{state.nombre}</Text>
        <Button
          title="Soy un boton"
          onPress={() => {
            setState({nombre: 'Ivan'});
          }}
        />
      </View>
    </SafeAreaView>
  );
};
