"use client"

// --types--
import { CarouselProps } from "."

// --carousel--
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"

const CarouselContainer = ({ isLarge, autoplay = false, loop = false, children }: CarouselProps) => {
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
            <div className="embla__container">{children}</div>
        </div>
    )
}

export default CarouselContainer
