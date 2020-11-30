import React from 'react';
import { ActivityIndicator } from 'react-native';
import { windowHeight, windowWidth } from '../../constants';

import connector from './connector';

const Loader = ({ loader }) => {
  return (
    <ActivityIndicator
      animating={loader}
      size="large"
      color="#6646ee"
      style={{ position: 'absolute', marginTop: windowHeight / 2.1, marginLeft: windowWidth / 2.1 }}
    />
  );
};

export default connector(Loader);
