import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import { View, Text } from 'react-native';

import {
  AuthStack as LoggedOut
} from './config/router';

export default class App extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.setState({
        loading: false,
        user
      })
    })
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {

    if (this.state.user) return <Text>Você está logado!</Text>
    if (this.state.loading) return null

    return <LoggedOut />
  }
}
