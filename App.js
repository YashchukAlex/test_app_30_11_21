import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import NavigationContainer from './src/navigation/index';
import Loader from './src/components/Loader';

import store from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView forceInset={{ top: 'always' }} />
      <StatusBar hidden={false} barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <NavigationContainer />
        <Loader />
      </View>
    </Provider>
  );
};

export default App;
