import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppScreen from '../views/screens/AppScreen/app.screen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={AppScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
