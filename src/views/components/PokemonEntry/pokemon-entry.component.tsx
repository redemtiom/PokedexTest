import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {PokedexEntry} from '../../../types/api.types';
import {useGetPokemonByNameQuery} from '../../../services/pokemonApi';
import {useNavigation} from '@react-navigation/native';

import {styles} from './pokemon-entry.styles';

const PokemonEntry = ({item}: {item: PokedexEntry; index: number}) => {
  const navigation = useNavigation();
  const {data, isLoading, isSuccess} = useGetPokemonByNameQuery({
    name: item.name,
  });
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail')}>
      <View style={styles.item}>
        {isLoading && (
          <View style={styles.imageContainer}>
            <ActivityIndicator />
          </View>
        )}
        {isSuccess && (
          <Image
            source={{uri: data.sprites.front_default}}
            style={styles.imageContainer}
          />
        )}
        <View style={styles.rightContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonEntry;
