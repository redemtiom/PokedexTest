import {baseApi} from './api';
import {PokedexRequest, PokedexResponse} from '../types/api.types';
import {PokemonResponse, PokemonRequest} from '../types/pokemon.types';
import {SpeciesRequest, SpeciesResponse} from '../types/species.types';
import {EncounterRequest, EncounterResponse} from '../types/encounter.types';

export const pokemonApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPokemonByName: builder.query<PokemonResponse, PokemonRequest>({
      query: ({name}) => `pokemon/${name}`,
    }),
    getPokedex: builder.query<PokedexResponse, PokedexRequest>({
      query: ({limit, offset}) => `pokemon?limit=${limit}&offset=${offset}"`,
    }),
    getPokemonSpecies: builder.query<SpeciesResponse, SpeciesRequest>({
      query: ({id}) => `pokemon-species/${id}`,
    }),
    getPokemonEncounters: builder.query<EncounterResponse, EncounterRequest>({
      query: ({id}) => `encounter-method/${id}`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokedexQuery,
  useGetPokemonSpeciesQuery,
  useGetPokemonEncountersQuery,
} = pokemonApi;
