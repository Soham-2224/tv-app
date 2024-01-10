// --types--
import { Movie } from "@/typings"

// --utils--
import { cn } from "@/lib/utils"
import { ENDPOINT_KEYS, fetchCarouselData } from "@/lib/getMovies"

// --components--
import CarouselContainer from "./CarouselContainer"

export type CarouselProps = {
    isLarge?: boolean
    data: Movie[] | undefined
    type: "movie" | "tv"
    autoplay?: boolean
    loop?: boolean
    endpoint: keyof typeof ENDPOINT_KEYS
}

export default async function MoviesCarousel(Props: Omit<CarouselProps, "data">) {
    const { isLarge, endpoint, type } = Props

    const fetchedData = await fetchCarouselData(type, endpoint)

    return (
        <div className={cn("embla", isLarge && "isLarge")}>
            <CarouselContainer
                {...Props}
                data={fetchedData}
            />
        </div>
    )
}
