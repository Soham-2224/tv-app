
// --dummy--
import { singleMovieDetail } from "@/lib/dummy"

// --components--
import MovieDetail from "@/components/shared/MovieDetail"

export default async function Page() {
    const data = singleMovieDetail

    return (
        <main className="relative">
            <MovieDetail data={data} />
        </main>
    )
}
