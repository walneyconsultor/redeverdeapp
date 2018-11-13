import React, { Component } from 'react';

import firebase from 'react-native-firebase';
import theme from '../theme/theme.json';

import t from 'tcomb-form-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import {
  View,
  StyleSheet
} from 'react-native';

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
  }
}

const options = {
  fields: {
    email: {
      error: 'Você precisa inserir um email para continuar.'
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: 'Opa, parece que você deixou algo em branco aqui.'
    },
    terms: {
      label: 'Termos e condições',
    },
  },
  stylesheet: formStyles,
};

class Login extends Component {

  handleSubmit = () => {

    const values = this._form.getValue();

    /*
      If null, the user has passed empty values
      to the fields. so . . .
    */

    if(values && values.terms) {
      // Login the account onto firebase

      const{ email, password } = values;

      firebase.auth().signInWithEmailAndPassword(email, password)

        .then(data => {
          console.warn(data);
          // Do something if the user exists.
        })

        .catch(error => {
          console.warn(error);
          // Show some validation content if the user doesn't exist.
        });

    }

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
            type="secondary">Entrar</AwesomeButtonRick>
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

  /*
    It wouldn't center just by
    aligning the items to the center, so
    I had to create another wrapper to wrap
    just the button.
  */

  buttonWrapper: {
    width: '100%',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default Login;
