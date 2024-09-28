import {baseApi} from './api';

export const pokemonApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const {useGetPokemonByNameQuery} = pokemonApi;
