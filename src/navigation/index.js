import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import auth from './authStack';
import main from './mainStack';

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'authStack'} component={auth} options={{ header: () => null }} />
          <Stack.Screen name={'mainStack'} component={main} options={{ header: () => null }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
