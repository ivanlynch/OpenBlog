import {TextInput, View, Button, StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import {Formik} from 'formik';
import {PostContext} from '../contexts/PostContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

/**
 * @param {{ onSubmit: () => void; }} props
 */
export default function NewPostForm(props) {
  // @ts-ignore
  const {dispatch} = useContext(PostContext);
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{title: '', body: '', author: ''}}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch({
            type: 'ADD_POST',
            post: values,
          });
          actions.resetForm();
          props.onSubmit();
        }}>
        {(formikprops) => (
          <View style={styles.formGroup}>
            <View style={styles.formTitle}>
              <Text style={styles.title}>NEW FEED</Text>
            </View>
            <TextInput
              key="title"
              style={styles.formInput}
              placeholder="insert title"
              onChangeText={formikprops.handleChange('title')}
              value={formikprops.values.title}
            />
            <TextInput
              key="body"
              multiline
              style={styles.formInput}
              placeholder="insert body"
              onChangeText={formikprops.handleChange('body')}
              value={formikprops.values.body}
            />
            <TextInput
              key="author"
              style={styles.formInput}
              placeholder="insert author"
              onChangeText={formikprops.handleChange('author')}
              value={formikprops.values.author}
            />
            <TouchableOpacity
              style={styles.formSubmit}
              // @ts-ignore
              onPress={formikprops.handleSubmit}>
              <Text style={styles.textSubmit}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 0,
    width: '100%',
  },
  formTitle: {
    borderBottomWidth: 4,
    borderBottomColor: '#FFDAC1',
    margin: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: 'DoHyeon-Regular',
  },
  formSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDAC1',
    padding: 10,
    margin: 20,
    marginBottom: 10,
  },
  textSubmit: {
    fontSize: 25,
    fontFamily: 'DoHyeon-Regular',
    textAlign: 'center',
  },
  formInput: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#FFDAC1',
    padding: 10,
    fontSize: 18,
    margin: 2,
    borderRadius: 5,
  },
  formGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
});
