import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';

import { signInApi } from '../../api/authApi';

import styles from './styles';

export default ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRequest = () => {
    signInApi({ email, password });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
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
      <FormButton buttonTitle="Login" onPress={() => handleRequest()} />
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>New user? Click here</Text>
      </TouchableOpacity>
    </View>
  );
};
