import React, { Component } from 'react';

import theme from '../theme/theme.json';

import t from 'tcomb-form-native'; // 0.6.9

import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import { View, StyleSheet } from 'react-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: theme.statusbar.default_color,
      fontSize: 16,
      marginBottom: 7,
      fontWeight: '400'
    },
    error: {
      color: '#994d4d',
      fontSize: 16,
      marginBottom: 7,
      fontWeight: '400'
    }
  },
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};

class Login extends Component {

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>

        <Form
          ref={c => this._form = c}
          type={User}
          options={options} />

        <View style={styles.buttonWrapper}>
          <AwesomeButtonRick
            style            = { styles.button }
            backgroundColor  = { theme.buttons.bg_color }
            backgroundShadow = { theme.buttons.border_color }
            backgroundActive = { theme.buttons.border_color }
            backgroundDarker = { theme.buttons.border_color }
            borderColor      = { theme.buttons.bg_color }
            textColor        = { theme.buttons.text_color }
            textSize         = { 16 }
            width            = { 250 }
            onPress          = { () => this.handleSubmit() }
            type="secondary">Faça login</AwesomeButtonRick>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    padding: 20,
    height: '100%',
    backgroundColor: theme.background.light_green,
  },

  button: {
    margin: 'auto',
  },

  buttonWrapper: {
    width: '100%',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default Login;
