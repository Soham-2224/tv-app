import MoviesCarousel from "@/components/shared/MoviesCarousel"
import { nowPlayingMovies, topRatedMovies, upcomingMovies } from "@/lib/dummy"
// import { getNowPlaying, getTopRated, getUpcoming } from "@/lib/getMovies"

export default async function Home() {

    return (
        <main className="">
            <div className="flex flex-col gap-8 p-6 pr-0">
                <MoviesCarousel
                    isLarge
                    movies={nowPlayingMovies}
                    title="Now Playing"
                    // autoplay
                    loop
                />
                <MoviesCarousel
                    movies={upcomingMovies}
                    title="Upcoming movies"
                />
                <MoviesCarousel
                    movies={topRatedMovies}
                    title="Top-rated movies"
                />
            </div>
        </main>
    )
}
