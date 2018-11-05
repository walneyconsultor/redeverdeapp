import React, { Component } from 'react';

import {
  View,
  Input,
  Text,
  StyleSheet
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (

      <View>

        <View style={styles.inputBlock}>
          <Text>Email</Text>
          <Input type="email"/>
        </View>

        <View style={styles.inputBlock}>
          <Text>Senha</Text>
          <Input type="password"/>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({

  inputBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left'
  }

})
