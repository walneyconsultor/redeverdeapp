import {
  StackNavigator
} from 'react-navigation';

import SplashScreen from '../views/splash';
import LoginScreen from '../views/login';

export const AuthStack = StackNavigator({

  Splash: {
    screen: SplashScreen
  },
  
  Login: {
    screen: LoginScreen
  },


}, {
  headerMode: 'none'
})
