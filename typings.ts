export type CommonMovieTv = {
    adult: boolean
    backdrop_path: string | null
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path?: string | null
    video: boolean
    vote_average: number
    vote_count: number
    title: string
    release_date: string
    first_air_date: string
    name: string
}

export type Movie = CommonMovieTv & {
    first_air_date?: string
    name?: string
}

export type TV = CommonMovieTv & {
    title?: string
    release_date?: string
}

export type SearchResults = {
    page: number
    results: Movie[] | TV[]
    total_pages: number
    total_results: number
}

export type Favourite = Pick<
    CommonMovieTv,
    | "backdrop_path"
    | "id"
    | "original_title"
    | "poster_path"
    | "release_date"
    | "title"
    | "vote_average"
    | "name"
    | "first_air_date"
>

export type Genre = {
    id: number
    name: string
}

export type Genres = {
    genres: Genre[]
}

export type MovieOrTv = "movie" | "tv"

export type Video = {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
}

export type Review = {
    author: string
    author_details: {
        name: string
        username: string
        avatar_path: string | null
        rating: number
    }
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
}

// ---------------Single-Movie-Details---------------------

export type SingleMovieDetail = Omit<Movie, "genre_ids"> & {
    belongs_to_collection?: BelongsToCollection | null
    budget: number
    genres: Genre[]
    homepage?: string
    imdb_id: string
    production_companies?: ProductionCompany[]
    production_countries?: ProductionCountry[]
    revenue?: number | null
    runtime: number
    spoken_languages?: SpokenLanguage[]
    status?: string
    tagline?: string
    videos?: {
        results: Video[]
    }
    credits: {
        cast: Actor[]
        crew: Crew[]
    }
    first_air_date?: string
    name?: string
}

export type Actor = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    cast_id: number
    character: string
    credit_id: string
    order: number
}

export type Crew = Omit<Actor, "character" | "order" | "cast_id"> & {
    department: string
    job: string
}

export type BelongsToCollection = {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string
}

export type ProductionCompany = {
    id: number
    logo_path: string | null
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


// ---------------Single-TV-Details---------------------

export type SingleTvDetail = Omit<TV, "genre_ids"> & {
    created_by?: CreatedByEntity[] | null
    episode_run_time?: null[] | null
    genres?: Genres[] | null
    in_production: boolean
    languages?: string[] | null
    last_air_date: string
    last_episode_to_air: LastEpisodeToAirOrNextEpisodeToAir
    next_episode_to_air: LastEpisodeToAirOrNextEpisodeToAir
    networks?: NetworksEntityOrProductionCompaniesEntity[] | null
    number_of_episodes: number
    number_of_seasons: number
    origin_country?: string[] | null
    original_name: string
    production_companies?: NetworksEntityOrProductionCompaniesEntity[] | null
    production_countries?: ProductionCountriesEntity[] | null
    seasons?: SeasonsEntity[] | null
    spoken_languages?: SpokenLanguagesEntity[] | null
    status: string
    tagline: string
    type: string
    videos?: {
        results: Video[]
    }
    credits: {
        cast: Actor[]
        crew: Crew[]
    }
}
export type CreatedByEntity = {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string
}
export type LastEpisodeToAirOrNextEpisodeToAir = {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime?: null
    season_number: number
    show_id: number
    still_path?: null
}
export type NetworksEntityOrProductionCompaniesEntity = {
    id: number
    logo_path: string
    name: string
    origin_country: string
}
export type ProductionCountriesEntity = {
    iso_3166_1: string
    name: string
}
export type SeasonsEntity = {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
}
export type SpokenLanguagesEntity = {
    english_name: string
    iso_639_1: string
    name: string
}
