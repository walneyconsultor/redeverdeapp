import React, { Component } from 'react';

import { View } from 'react-native';

import {
  AuthStack
} from './config/router';

export default class App extends Component {
  render() {
    return (
      <AuthStack />
    );
  }
}
