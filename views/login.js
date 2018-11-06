import React from 'react';

import LoginForm from '../components/LoginForm.js';

import theme from '../theme/theme.json';

import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

const login = props => {

  return (
    <View style={styles.view}>
      <StatusBar
        backgroundColor={ theme.statusbar.default_color } />
      <Text>Teste</Text>
    </View>
  )

}

// styles

const styles = StyleSheet.create({

  view: {
    display         : 'flex',
    textAlign       : 'center',
    justifyContent  : 'center',
    alignItems      : 'center',
    height          : '100%',
    backgroundColor : theme.background.light_green
  }

})

export default login;
