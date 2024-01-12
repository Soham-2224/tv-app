// --dummy--
import { similarMovies, singleMovieReview } from "@/lib/dummy"

// --components--
import MovieDetail from "@/components/shared/MovieDetail"

export default async function Page() {
    const reviews = singleMovieReview

    return (
        <main className="relative">
            <div className="pb-4 flex flex-col relative">
                <MovieDetail />
            </div>
        </main>
    )
}
