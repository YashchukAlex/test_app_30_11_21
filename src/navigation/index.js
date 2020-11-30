import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './authStack';
import MainStack from './mainStack';

import connector from './connector';

const Navigation = ({ token, logout }) => {
  return <NavigationContainer>{!token ? <AuthStack /> : <MainStack logout={logout} />}</NavigationContainer>;
};

export default connector(Navigation);
