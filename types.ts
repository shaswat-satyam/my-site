type MovieIds = {
  trakt: number;
  slug: string;
  imdb: string;
  tmdb: number;
};

type Movie = {
  title: string;
  year: number;
  ids: MovieIds;
};

export type WatchedMovie = {
  plays: number;
  last_watched_at: string;
  last_updated_at: string;
  movie: Movie;
};

export type WatchedMoviesList = WatchedMovie[];

type ShowIds = {
  trakt: number;
  slug: string;
  tvdb: number;
  imdb: string;
  tmdb: number;
  tvrage: number | null;
};

type Show = {
  title: string;
  year: number;
  ids: ShowIds;
};

type Episode = {
  number: number;
  plays: number;
  last_watched_at: string;
};

type Season = {
  number: number;
  episodes: Episode[];
};

export type WatchedShow = {
  plays: number;
  last_watched_at: string;
  last_updated_at: string;
  reset_at: string | null;
  show: Show;
  seasons: Season[];
};

export type WatchedShowsList = WatchedShow[];
