import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import connector from './connector';

import { signInApi } from '../../api/authApi';

import styles from './styles';

const Tasks = ({ navigation }) => {
  const handleRequest = () => {};
  return <View style={styles.container} />;
};

export default connector(Tasks);
