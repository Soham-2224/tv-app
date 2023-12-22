"use client"

import React from "react"
import Image from "next/image"

// --types--
import { Movie } from "@/typings"

// --carousel--
import useEmblaCarousel from "embla-carousel-react"
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay"

// --utils--
import { cn } from "@/lib/utils"
import getImagePath from "@/lib/getImagePath"
import CarouselCard from "../CarouselCard"

type Props = {
    isLarge?: boolean
    movies: Movie[]
    title?: string
    autoplay?: boolean
    loop?: boolean
}

const MoviesCarousel = ({ isLarge, movies, title, autoplay = false, loop = false }: Props) => {
    const autoplayOptions: AutoplayOptionsType = {
        delay: 3000,
        playOnInit: autoplay,
        stopOnInteraction: !autoplay,
        stopOnFocusIn: autoplay
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", loop: loop }, [
        Autoplay(autoplayOptions)
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
                            <div className="embla__slide">
                                <CarouselCard
                                    data={movie}
                                    key={`${movie.id}_${idx}`}
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
