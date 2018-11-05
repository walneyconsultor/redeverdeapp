import React from 'react';

import LoginForm from '../components/LoginForm.js';

import { View, StyleSheet } from 'react-native';

const login = props => {

  return (
    <View style={styles.view}>

      <LoginForm />

    </View>
  )

}

// styles

const styles = StyleSheet.create({

  view: {
    display:        'flex',
    textAlign:      'center',
    justifyContent: 'center',
  }

})

export default login;
