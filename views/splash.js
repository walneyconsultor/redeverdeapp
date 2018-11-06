import React from 'react';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Modal from "react-native-modal";

import theme from '../theme/theme.json';

import LoginForm from '../components/LoginForm.js';
import Logo from '../assets/img/logo2.png';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';

const SplashModal = props => {
  return (
    <View>
      <Modal isVisible = { props.isVisible }>
       <View style     = { styles.modal }>
         <Text>OIEEEEEE SOU UMA MODAL</Text>
       </View>
     </Modal>
   </View>
  )
}

class Splash extends React.Component {

  state = {
    isModalOpen: false
  }

  async toggleModal() {
    await this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {

    const { isModalOpen } = this.state;
    console.warn(isModalOpen);
    return (
      <View style={ styles.view }>

        <SplashModal isVisible = { isModalOpen } />

        <StatusBar
          backgroundColor={ theme.statusbar.default_color } />

        <Image
          style  = { styles.logo }
          source = { Logo } />

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
          onPress          = { () => this.toggleModal() }
          type="secondary">Venha conhecer o App!</AwesomeButtonRick>

      </View>
    )
  }
}

// styles

const styles = StyleSheet.create({

  view: {
    display         : 'flex',
    flexDirection   : 'column',
    textAlign       : 'center',
    justifyContent  : 'center',
    alignItems      : 'center',
    height          : '100%',
    backgroundColor : theme.background.light_green
  },

  logo: {
    width  : 175,
    height : 175,
  },

  button: {
    margin    : 'auto',
    position  : 'absolute',
    bottom    : 65,
  },

  modal: {
    flex: 1
  }

})

export default Splash;
