import { SearchResults } from "@/typings"

const BASE_PATH = "https://api.themoviedb.org/3"

async function fetchFromTMDB(url: URL, cacheTime?: number, page?: number) {
    url.searchParams.set("include_adult", "false")
    url.searchParams.set("include_video", "true")
    url.searchParams.set("sort_by", "popularity.desc")
    url.searchParams.set("language", "en-US")
    url.searchParams.set("page", "1")

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
        const res = await fetch(url.toString(), options);
        if (!res) {
            return;
        }
        const data = (await res.json()) as SearchResults;
        return data;
        
    } catch (error) {
        console.log(error)
    }
}

export async function getTopRated(type: "movie" | "tv") {
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data = await fetchFromTMDB(url)

    return data?.results;
}

export async function getUpcoming(type: "movie" | "tv") {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming")
    const data = await fetchFromTMDB(url);

    return data?.results;
}

export async function getNowPlaying(type: "movie" | "tv") {
    const url = new URL("https://api.themoviedb.org/3/movie/now_playing")
    const data = await fetchFromTMDB(url)

    return data?.results;
}