import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import PokemonEntry from '../../components/PokemonEntry/pokemon-entry.component';
import Gradient from '../../components/Gradient/gradient.component';

import {useGetPokedexQuery} from '../../../services/pokemonApi';
import {PokedexEntry} from '../../../types/api.types';

//import {styles} from './pokedex.styles';

const PokedexScreen = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<PokedexEntry[]>([]);
  const {data, isLoading, isFetching} = useGetPokedexQuery({
    limit: 10,
    offset: offset,
  });
  //const pokemons: PokedexEntry[] = data?.results || [];
  useEffect(() => {
    if (data) {
      setPokemons([...pokemons, ...data.results]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const next = () => {
    if (!isFetching && data && data.results.length > 0) {
      setOffset(prev => prev + 10); // Cargar los próximos 10 Pokémon
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Gradient>
      <View>
        <FlatList
          data={pokemons}
          renderItem={({item, index}) => (
            <PokemonEntry item={item} index={index} />
          )}
          onEndReached={next} // Llama a loadMore cuando se llegue al final de la lista
          onEndReachedThreshold={0.1} // Umbral para considerar que el final ha sido alcanzado
          ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
          //keyExtractor={item => item.entry_number.toString()}
        />
      </View>
    </Gradient>
  );
};

export default PokedexScreen;
