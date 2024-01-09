import {  SearchResults } from "@/typings"
import axios from "axios"

const BASE_PATH = "https://api.themoviedb.org/3"

export const ENDPOINT_KEYS = {
    upcoming: "upcoming",
    topRated: "top_rated",
    nowPlaying: "now_playing"
}

// async function fetchFromTMDB(url: URL, cacheTime?: number, page?: number) {
//     url.searchParams.set("include_adult", "false")
//     url.searchParams.set("include_video", "true")
//     url.searchParams.set("sort_by", "popularity.desc")
//     url.searchParams.set("language", "en-US")
//     url.searchParams.set("page", "1")

//     const options: RequestInit = {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${process.env.TMDB_API_KEY}`
//         },
//         next: {
//             revalidate: cacheTime || 60 * 60 * 24
//         }
//     }

//     try {
//         const res = await fetch(url.toString(), options);
//         if (!res) {
//             return;
//         }
//         const data = (await res.json()) as SearchResults;
//         return data;
        
//     } catch (error) {
//         console.log(error)
//     }
// }

async function fetchFromTMDB(url : URL , page?: number) {
    const params = new URLSearchParams({
        // include_adult: "false",
        // include_video: "true",
        // sort_by: "popularity.desc",
        language: "en-US",
        page: String(page || 1)
    })

    const fullUrl = `${url}?${params.toString()}`

    try {
        const response = await axios.get(fullUrl, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
            }
        })

        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function fetchData(type: "movie" | "tv", endpoint: keyof typeof ENDPOINT_KEYS) {
    const endpointKey = ENDPOINT_KEYS[endpoint]

    const url = new URL(`${BASE_PATH}/${type}/${endpointKey}`)
    const data = await fetchFromTMDB(url)

    return data?.results;
}