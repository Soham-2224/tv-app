import React from "react"
import { Clock10Icon, CompassIcon, HeartIcon, HomeIcon } from "lucide-react"
import { Genre, Genres } from "@/typings"

export const NAV_LINKS : ({name: string, link: string})[] = [
    {
        name: "Movies",
        link: "/movies"
    },
    {
        name: "TV Shows",
        link: "/tv"
    },
]

export const SIDEBAR_LINKS : ({icon: (value: boolean) => React.ReactNode, link: string, title: string})[] = [
    {
        icon: (isActive) => (
            <HomeIcon
                className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${
                    isActive ? " text-primary" : " text-foreground"
                }`}
            />
        ),
        link: "",
        title: "Home"
    },
    {
        icon: (isActive) => (
            <CompassIcon
                className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${
                    isActive ? " text-primary" : " text-foreground"
                }`}
            />
        ),
        link: "/discover",
        title: "Discover"
    },
    {
        icon: (isActive) => (
            <HeartIcon
                className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${
                    isActive ? " text-primary" : " text-foreground"
                }`}
            />
        ),
        link: "/favourite",
        title: "Favourite"
    }
]

export const GENRES: Genre[] = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 10759,
        name: "Action & Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 10762,
        name: "Kids"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10763,
        name: "News"
    },
    {
        id: 10764,
        name: "Reality"
    },
    {
        id: 10765,
        name: "Sci-Fi & Fantasy"
    },
    {
        id: 10766,
        name: "Soap"
    },
    {
        id: 10767,
        name: "Talk"
    },
    {
        id: 10768,
        name: "War & Politics"
    },
    {
        id: 37,
        name: "Western"
    }
]

export const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/"