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

export type Genre = {
    id: number
    name: string
}

export type Genres = {
    genres: Genre[]
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

export type MovieOrTv = "movie" | "tv"
