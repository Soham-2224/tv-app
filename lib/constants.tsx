import { Clock10Icon, CompassIcon, HeartIcon, HomeIcon } from "lucide-react"

export const NAV_LINKS = [
    {
        icon: (isActivb: boolean) => (
            <HomeIcon
                className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${
                    isActivb ? " text-primary" : " text-foreground"
                }`}
            />
        ),
        link: "/",
        title: "Home"
    },
    {
        icon: (isActivb: boolean) => (
            <CompassIcon
                className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${
                    isActivb ? " text-primary" : " text-foreground"
                }`}
            />
        ),
        link: "/discover",
        title: "Discover"
    },
    {
        icon: (isActivb: boolean) => (
            <Clock10Icon
                className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${
                    isActivb ? " text-primary" : " text-foreground"
                }`}
            />
        ),
        link: "/comming-soon",
        title: "Comming soon"
    },
    {
        icon: (isActivb: boolean) => (
            <HeartIcon
                className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${
                    isActivb ? " text-primary" : " text-foreground"
                }`}
            />
        ),
        link: "/favourite",
        title: "Favourite"
    }
]

export const GENRES = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
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
        id: 9648,
        name: "Mystery"
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
        id: 37,
        name: "Western"
    }
]
