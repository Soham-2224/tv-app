const BASE_PATH = "https://api.themoviedb.org/3"

export const ENDPOINT_KEYS = {
    upcoming: "upcoming",
    topRated: "top_rated",
    nowPlaying: "now_playing",
    similar: "similar"
}

async function fetchFromTMDB(url: URL, cacheTime?: number) {
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24
        }
    }
    try {
        const response = await fetch(url.toString(), options)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}

export async function fetchCarouselData(type: "movie" | "tv", endpoint: keyof typeof ENDPOINT_KEYS, id?: number) {
    let endpointKey = ENDPOINT_KEYS[endpoint]

    if (endpoint === "similar" && id) {
        endpointKey = `${id}/${endpointKey}`
    }

    const url = new URL(`${BASE_PATH}/${type}/${endpointKey}`)
    const data = await fetchFromTMDB(url)

    return data?.results
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
    const url = new URL(`https://api.themoviedb.org/3/discover/movie`)

    keywords && url.searchParams.set("with_keywords", keywords)
    id && url.searchParams.set("with_genres", id)

    const data = await fetchFromTMDB(url)
    return data.results
}

export async function getSearchedMovies(term: string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie")

    url.searchParams.set("query", term)
    url.searchParams.set("include_adult", "false")
    url.searchParams.set("language", "en-US")
    url.searchParams.set("page", "1")

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    }

    const response = await fetch(url.toString(), options)
    const data = await response.json()

    return data.results
}

