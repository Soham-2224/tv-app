import MoviesCarousel from "@/components/shared/MoviesCarousel"
import { getUpcomingMovies } from "@/lib/getMovies"
// import { getNowPlaying, getTopRated, getUpcoming } from "@/lib/getMovies"

export default async function Home() {

    const nowPlayingMovies = await getUpcomingMovies()
    // const upcomingMovies = await getUpcoming("movie")
    // const topRatedMovies = await getTopRated("movie")

    console.log(nowPlayingMovies)

    return (
        <main className="">
            <div className="flex flex-col gap-8">
                {nowPlayingMovies?.map((movie) => (
                    <p>{movie.title}</p>
                ))}
                {/* <MoviesCarousel
                    isLarge
                    movies={nowPlayingMovies}
                    title="Now Playing"
                />
                <MoviesCarousel
                    movies={upcomingMovies}
                    title="Upcoming movies"
                />
                <MoviesCarousel
                    movies={topRatedMovies}
                    title="Top-rated movies"
                /> */}
            </div>
        </main>
    )
}
