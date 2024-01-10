import { Suspense } from "react"

// --components--
import MoviesCarousel from "@/components/shared/MoviesCarousel"
import CarouselSkeleton from "@/components/shared/Skeletons/CarouselSkeleton"

export default async function Page() {
    return (
        <main className="">
            <div className="flex flex-col gap-8 p-6 pr-0">
                <section>
                    <h1 className=" title-bold mb-4">Now Playing</h1>
                    <Suspense fallback={<CarouselSkeleton isLarge />}>
                        <MoviesCarousel
                            isLarge
                            // autoplay
                            type="movie"
                            loop
                            endpoint="nowPlaying"
                        />
                    </Suspense>
                </section>
                <section>
                    <h1 className=" title-bold mb-4">Upcoming movies</h1>
                    <Suspense fallback={<CarouselSkeleton />}>
                        <MoviesCarousel
                            type="movie"
                            endpoint="upcoming"
                        />
                    </Suspense>
                </section>
                <section>
                    <h1 className=" title-bold mb-4">Top-rated movies</h1>
                    <Suspense fallback={<CarouselSkeleton />}>
                        <MoviesCarousel
                            type="movie"
                            endpoint="topRated"
                        />
                    </Suspense>
                </section>
            </div>
        </main>
    )
}
