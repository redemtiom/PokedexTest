export type PokedexRequest = {
  limit: number;
  offset: number;
};
export type PokedexResponse = {
  count:    number;
  next:     string | null;
  previous: string |null;
  results:  PokedexEntry[];
}

export type PokedexEntry = {
  name: string;
  url:  string;
}