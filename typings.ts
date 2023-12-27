export type Movie = {
    adult: boolean
    backdrop_path: string | null
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path?: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type SearchResults = {
    page: number
    results: Movie[]
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

export type Favourite = Omit<
    Movie,
    "genre_ids" | "overview" | "popularity" | "video" | "vote_count" | "adult" | "original_language"
> & {
    // Define specific properties for Favourite type, if any
    title?: string
}

export type SingleMovieDetail = Omit<Movie, "genre_ids"> & {
    belongs_to_collection?: BelongsToCollection | null
    budget: number
    genres: Genre[]
    homepage?: string
    imdb_id: string
    production_companies?: ProductionCompany[]
    production_countries?: ProductionCountry[]
    revenue: number
    runtime: number
    spoken_languages?: SpokenLanguage[]
    status?: string
    tagline?: string
    videos?: {
        results: Video[]
    }
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
