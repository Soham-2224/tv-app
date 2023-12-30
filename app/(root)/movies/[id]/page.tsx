
// --dummy--
import { similarMovies, singleMovieDetail, singleMovieReview } from "@/lib/dummy"

// --components--
import MovieDetail from "@/components/shared/MovieDetail"

export default async function Page() {
    const data = singleMovieDetail
    const reviews = singleMovieReview
    const similar = similarMovies

    return (
        <main className="relative pb-4">
            <MovieDetail data={data} reviews={reviews} similarMovies={similar} />
        </main>
    )
}
