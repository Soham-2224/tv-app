// --types--
import { Movie, TV } from "@/typings"

// --utils--
import { cn } from "@/lib/utils"
import { ENDPOINT_KEYS, fetchCarouselData } from "@/lib/getMovies"

// --components--
import CarouselContainer from "./CarouselContainer"
import CarouselCard from "../CarouselCard"

export type CarouselProps = {
    isLarge?: boolean
    type: "movie" | "tv"
    autoplay?: boolean
    loop?: boolean
    endpoint?: keyof typeof ENDPOINT_KEYS
    children?: React.ReactNode
}

export default async function MoviesCarousel(Props: CarouselProps & {id?: number}) {
    const { isLarge, endpoint = "upcoming", type, id } = Props

    const fetchedData = await fetchCarouselData(type, endpoint, id)

    return (
        <div className={cn("embla", isLarge && "isLarge")}>
            {fetchedData?.length ? (
                <CarouselContainer
                    {...Props}
                >
                    {fetchedData?.map((movie, idx) => (
                        <div
                            key={`${movie.id}_${idx}`}
                            className="embla__slide"
                        >
                            <CarouselCard
                                isTv={type === "tv"}
                                data={movie}
                                isLarge={isLarge}
                            />
                        </div>
                    ))}
                </CarouselContainer>
            ) : (
                <h1>No results found</h1>
            )}
        </div>
    )
}
