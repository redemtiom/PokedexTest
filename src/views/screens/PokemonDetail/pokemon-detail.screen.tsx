import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {PokemonResponse} from '../../../types/pokemon.types';
import {
  useGetPokemonSpeciesQuery,
  useGetPokemonEncountersQuery,
} from '../../../services/pokemonApi';
import Gradient from '../../components/Gradient/gradient.component';
import SizedBox from '../../components/SizedBox/sized-box.component';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './pokemon-detail.styles';

const PokemonDetailScreen = ({
  route,
}: //navigation,
{
  route: any;
  //navigation: any;
}) => {
  const {pokemon}: {pokemon: PokemonResponse} = route.params;
  const {data} = useGetPokemonSpeciesQuery({
    id: pokemon.id,
  });
  const {data: encounters} = useGetPokemonEncountersQuery({
    id: pokemon.id,
  });

  const description = data?.flavor_text_entries?.find((item) => item?.language?.name === 'en');
  const encounter = encounters?.names?.find((item) => item?.language?.name === 'en');

  return (
    <Gradient>
      <View style={styles.container}>
        <Image
          source={{uri: pokemon.sprites.front_default}}
          style={styles.imageContainer}
        />
        <ScrollView style={styles.scrollContainer}>
          <LinearGradient
            colors={[
              '#C8E8F4',
              '#B2E0EF',
              '#9DD8EB',
              '#7EC7E1',
              '#5BB9D7',
              '#37ACDA',
            ]}
            start={{x: 0.0, y: 0.5}}
            end={{x: 1.0, y: 0.5}}
            locations={[0.1, 0.2, 0.4, 0.8, 0.95, 1.0]}>
            <View style={styles.cardContainer}>
              <View>
                <Text style={styles.titleCard}>{pokemon?.name}</Text>
                <SizedBox height={2} width={'100%'} color="white" />
              </View>
              <View style={styles.cardContainerDescription}>
                <View style={styles.cardLeft}>
                  <Text style={styles.customText}>
                    {description?.flavor_text.replace(
                      /[\n\f]/g,
                      ' ',
                    )}
                  </Text>
                </View>
                <View style={styles.cardRight}>
                  <Text style={styles.customText}>
                    Height - {pokemon?.height}
                  </Text>
                  <SizedBox height={2} width={'100%'} color="white" />
                  <Text style={styles.customText}>
                    Width - {pokemon?.weight}
                  </Text>
                  <SizedBox height={2} width={'100%'} color="white" />
                  <Text style={styles.customText}>
                    Habitat - {data?.habitat?.name}
                  </Text>
                  <SizedBox height={2} width={'100%'} color="white" />
                  {pokemon?.types.map((item, index) => (
                    <>
                      <Text key={index} style={styles.customText}>
                        Type - {item?.type?.name}
                      </Text>
                      <SizedBox height={2} width={'100%'} color="white" />
                    </>
                  ))}
                </View>
              </View>
              <View>
                <SizedBox height={16} />
                <Text style={styles.titleCard}>Encounters</Text>
                <SizedBox height={16} />
                <Text style={styles.customText}>
                  {encounter?.name || 'Unknown'}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
    </Gradient>
  );
};

export default PokemonDetailScreen;
