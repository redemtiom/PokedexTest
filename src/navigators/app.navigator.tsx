import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppScreen from '../views/screens/AppScreen/app.screen';
import UserScreen from '../views/screens/UserScreen/user.screen';
import PokedexScreen from '../views/screens/PokedexScreen/pokedex.screen';
import PokemonDetailScreen from '../views/screens/PokemonDetail/pokemon-detail.screen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={AppScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Pokedex" component={PokedexScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
