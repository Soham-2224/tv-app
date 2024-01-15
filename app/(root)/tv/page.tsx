import { Suspense } from "react"

// --components--
import MoviesCarousel from "@/components/shared/MoviesCarousel"
import CarouselSkeleton from "@/components/shared/Skeletons/CarouselSkeleton"
import SearchInput from "@/components/shared/SearchInput"

export default async function Page() {
    return (
        <main className="">
            <div className="flex flex-col gap-8 p-6 pr-0">
                <div className=" w-full max-w-xs md:hidden">
                    <SearchInput />
                </div>
                <section>
                    <h1 className=" title-bold mb-4">Now Playing</h1>
                    <Suspense fallback={<CarouselSkeleton isLarge />}>
                        <MoviesCarousel
                            isLarge
                            autoplay
                            type="tv"
                            loop
                            endpoint="airingToday"
                        />
                    </Suspense>
                </section>
                <section>
                    <h1 className=" title-bold mb-4">Popular shows</h1>
                    <Suspense fallback={<CarouselSkeleton />}>
                        <MoviesCarousel
                            type="tv"
                            endpoint="popular"
                        />
                    </Suspense>
                </section>
                <section>
                    <h1 className=" title-bold mb-4">Top-rated shows</h1>
                    <Suspense fallback={<CarouselSkeleton />}>
                        <MoviesCarousel
                            type="tv"
                            endpoint="topRated"
                        />
                    </Suspense>
                </section>
            </div>
        </main>
    )
}
