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
