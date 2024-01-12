// --dummy--
import { similarMovies, singleMovieReview } from "@/lib/dummy"

// --components--
import MovieDetail from "@/components/shared/MovieDetail"

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params

    return (
        <main className="relative">
            <div className="pb-4 flex flex-col relative">
                <MovieDetail type="movie" id={id} />
            </div>
        </main>
    )
}
