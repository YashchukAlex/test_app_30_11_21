import React from 'react';
import { Button } from 'react-native';
import { clearAll } from '../services/storage';

import { createStackNavigator } from '@react-navigation/stack';

import Tasks from '../screens/Tasks';
import WorkWithTask from '../screens/WorkWithTask';

const Stack = createStackNavigator();

export default ({ logout }) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Tasks"
        screenOptions={{
          headerRight: () => (
            <Button
              title="logout"
              onPress={() => {
                clearAll();
                logout();
              }}
            />
          ),
        }}
      >
        <Stack.Screen name="Tasks" component={Tasks} options={{ headerLeft: () => null }} />
        <Stack.Screen name="WorkWithTask" component={WorkWithTask} />
      </Stack.Navigator>
    </>
  );
};
