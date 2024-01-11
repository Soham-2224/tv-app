"use client"

// --types--
import { CarouselProps } from "."

// --carousel--
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"

// --components--
import CarouselCard from "@/components/shared/CarouselCard"

const CarouselContainer = ({ isLarge, data, type, autoplay = false, loop = false }: CarouselProps) => {
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

    const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [Autoplay(autoplayOptions), WheelGesturesPlugin()])

    return (
        <div
            className="embla__viewport"
            ref={emblaRef}
        >
            <div className="embla__container">
                {data?.map((movie, idx) => (
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
            </div>
        </div>
    )
}

export default CarouselContainer
