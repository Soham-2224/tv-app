import {MoviesCarousel} from "@/components/shared/MoviesCarousel"

export default async function Page() {

    return (
        <main className="">
            <div className="flex flex-col gap-8 p-6 pr-0">
                <section>
                    <h1 className=" title-bold mb-4">Now Playing</h1>
                    <MoviesCarousel
                        isLarge
                        // autoplay
                        type="movie"
                        loop
                        endpoint="nowPlaying"
                    />
                </section>
                <section>
                    <h1 className=" title-bold mb-4">Upcoming movies</h1>
                    <MoviesCarousel type="movie" endpoint="upcoming" />
                </section>
                <section>
                    <h1 className=" title-bold mb-4">Top-rated movies</h1>
                    <MoviesCarousel type="movie" endpoint="topRated" />
                </section>
            </div>
        </main>
    )
}
