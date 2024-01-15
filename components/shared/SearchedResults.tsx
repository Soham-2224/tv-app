
// --lib--
import { fetchSearchedMovies } from "@/lib/getMovies";

// --types--
import { MovieOrTv } from "@/typings";

// --components--
import CarouselCard from "@/components/shared/CarouselCard";
import ErrorFetching from "@/components/shared/ErrorFetching"

export default async function SearchedResults({type, searchTerm}: {type: MovieOrTv, searchTerm: string}) {

    const movies = await fetchSearchedMovies(searchTerm, type)

    if (!movies?.length) return <ErrorFetching />

    return movies?.map((movie) => (
        <CarouselCard
            withLikeIcon
            key={movie.id}
            data={movie}
        />
    ))
}