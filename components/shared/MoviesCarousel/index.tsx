"use client"

// --types--
import { Movie } from "@/typings"

// --carousel--
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"

// --utils--
import { cn } from "@/lib/utils"

// --components--
import CarouselCard from "@/components/shared/CarouselCard"

type Props = {
    isLarge?: boolean
    movies: Movie[]
    title?: string
    autoplay?: boolean
    loop?: boolean
}

const MoviesCarousel = ({ isLarge, movies, title, autoplay = false, loop = false }: Props) => {
    const carouselOptions: EmblaOptionsType = {
        align: "start",
        containScroll: "trimSnaps",
        loop: loop,
        slidesToScroll: isLarge ? 1 : 2
    }

    const autoplayOptions: AutoplayOptionsType = {
        delay: 3000,
        playOnInit: autoplay,
        stopOnInteraction: !autoplay,
        stopOnFocusIn: autoplay
    }

    const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [
        Autoplay(autoplayOptions),
        WheelGesturesPlugin()
    ])

    return (
        <div>
            <h1 className=" text-lg font-semibold mb-4">{title}</h1>
            <div className={cn("embla", isLarge && "isLarge")}>
                <div
                    className="embla__viewport"
                    ref={emblaRef}
                >
                    <div className="embla__container">
                        {movies.map((movie, idx) => (
                            <div
                                key={`${movie.id}_${idx}`}
                                className="embla__slide"
                            >
                                <CarouselCard
                                    data={movie}
                                    isLarge={isLarge}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesCarousel
