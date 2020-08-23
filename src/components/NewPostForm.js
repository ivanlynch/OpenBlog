import {TextInput, View, Button, StyleSheet} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

/**
 * @param {{ onSubmit: () => void; }} props
 */
export default function NewPostForm(props) {
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{title: '', body: '', author: ''}}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          props.onSubmit();
        }}>
        {(formikprops) => (
          <View style={styles.formGroup}>
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
            <Button
              title="Submit"
              color="maroon"
              // @ts-ignore
              onPress={formikprops.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
});
