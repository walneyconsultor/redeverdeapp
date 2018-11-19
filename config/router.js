import {
  createStackNavigator
} from 'react-navigation';

import SplashScreen from '../views/splash';
import LoginScreen from '../views/login';

export const AuthStack = createStackNavigator({

  Splash: {
    screen: SplashScreen
  },

  Login: {
    screen: LoginScreen
  },


}, {
  headerMode: 'none'
})
