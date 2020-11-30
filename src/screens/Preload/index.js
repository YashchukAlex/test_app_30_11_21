import React, { useEffect, useCallback } from 'react';
import { getToken } from '../../services/storage';
import jwt_decode from 'jwt-decode';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import connector from './connector';

const Preload = ({ navigation, handleLoader }) => {
  const handler = useCallback(() => {
    handleLoader();
    let token = '';
    setTimeout(async () => {
      token = await getToken();
      if (token) {
        const now = Math.round(+new Date() / 1000);
        const decoded = jwt_decode(token);
        if (decoded.exp > now) {
          navigation.navigate('Tasks');
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
      handleLoader();
    }, 1500);
  }, [navigation]);

  useEffect(() => {
    handler();
  }, [handler, navigation]);

  return <View style={styles.loadingContainer} />;
};

export default connector(Preload);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
