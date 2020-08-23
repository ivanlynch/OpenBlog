import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import Card from '../shared/Card.js';
import React from 'react';
import Header from '../shared/Header.js';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export default function Feed(props) {
  return (
    <SafeAreaView style={styles.feedContainer}>
      <Header title="NEW POSTS" style={styles.feedTitle} />
      <View>
        <Text>Profile screen</Text>
      </View>
      <View>
        <Button title="Soy un boton" onPress={() => {}} />
      </View>
      <View style={styles.feedContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Card>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  feedTitle: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 2,
    fontFamily: 'DoHyeon-Regular',
  },
});