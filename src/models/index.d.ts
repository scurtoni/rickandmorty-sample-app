export type CharacterOrigin = {
  name: string;
  url: string;
};

export type CharacterLocation = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterSearchResults = Character[];

export type CharacterSearchInfo = {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
};

export type ErrorState = {
  error: any;
};

export type CharacterSearchState = {
  results: CharacterSearchResults;
  info: CharacterSearchInfo;
  page: number;
  details: {};
};

export type ApplicationState = {
  characterSearch: CharacterSearchState;
};
