import {baseApi} from './api';
import {PokedexRequest, PokedexResponse} from '../types/api.types';
import {PokemonResponse, PokemonRequest} from '../types/pokemon.types';

export const pokemonApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPokemonByName: builder.query<PokemonResponse, PokemonRequest>({
      query: ({name}) => `pokemon/${name}`,
    }),
    getPokedex: builder.query<PokedexResponse, PokedexRequest>({
      query: ({limit, offset}) => `pokemon?limit=${limit}&offset=${offset}"`,
    }),
  }),
});

export const {useGetPokemonByNameQuery, useGetPokedexQuery} = pokemonApi;
