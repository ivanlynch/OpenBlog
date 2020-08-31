import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import Card from '../shared/Card.js';
import React, {useContext} from 'react';
import Header from '../shared/Header.js';
import {PostContext} from '../contexts/PostContext.js';
import EmptyList from './EmptyList.js';

export default function Feed(props) {
  // @ts-ignore
  const {posts} = useContext(PostContext);

  return (
    <SafeAreaView style={styles.feedContainer}>
      <Header title="NEWS" style={styles.feedTitle} />
      <View style={styles.feedContainer}>
        <FlatList
          style={styles.feedListContainer}
          data={posts}
          ListEmptyComponent={() => <EmptyList />}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <Text>{item.author}</Text>
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
    backgroundColor: '#FFF',
    width: '100%',
  },
  feedTitle: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 2,
    fontFamily: 'DoHyeon-Regular',
  },
  feedListContainer: {
    width: '100%',
    padding: 10,
  },
});
