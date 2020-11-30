import React from 'react';

import { StatusBar, SafeAreaView } from 'react-native';
import NavigationContainer from './src/navigation/index';

const App = () => {
  return (
    <>
      <SafeAreaView forceInset={{ top: 'always' }} />
      <StatusBar hidden={false} barStyle="dark-content" />
      <NavigationContainer />
    </>
  );
};

export default App;
