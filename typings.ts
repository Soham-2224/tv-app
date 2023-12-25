export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type Favourite = Omit<
    Movie,
    "genre_ids" | "overview" | "popularity" | "video" | "vote_count" | "adult" |
    "original_language"
> & {
    // Define specific properties for Favourite type, if any
    title?: string
}

export type SingleMovieDetail = {
    adult: boolean
    backdrop_path?: string
    belongs_to_collection?: BelongsToCollection | null
    budget: number
    genres: Genre[]
    homepage?: string
    id: number
    imdb_id: string
    original_language: string
    original_title?: string
    overview: string
    popularity: number
    poster_path?: string
    production_companies?: ProductionCompany[]
    production_countries?: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages?: SpokenLanguage[]
    status?: string
    tagline?: string
    title?: string
    video?: boolean
    vote_average: number
    vote_count: number
}

export interface BelongsToCollection {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
}

export type ProductionCompany = {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export type ProductionCountry = {
    iso_3166_1: string
    name: string
}

export type SpokenLanguage = {
    english_name: string
    iso_639_1: string
    name: string
}