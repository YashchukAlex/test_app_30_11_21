import React, { useState } from 'react';
import { View, Text } from 'react-native';

import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';

import styles from './styles';

import { signUpApi } from '../../api/authApi';

export default ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRequest = () => {
    signUpApi({ email, password });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={(userEmail) => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={(userPassword) => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Sign Up" onPress={() => handleRequest()} />
    </View>
  );
};
