import { DiscoverSearchParams } from "@/app/(root)/movies/discover/page"

// --components--
import CarouselCard from "./CarouselCard"
import { fetchDiscoverMovies } from "@/lib/getMovies"

export default async function DiscoverResults({ searchParams }: DiscoverSearchParams) {

    const { with_genres, release_date_gte, release_date_lte } = searchParams

    const data = await fetchDiscoverMovies({type: "movie", genre: with_genres, from_date: release_date_gte, to_date: release_date_lte})

    return data?.map((movie) => (
        <CarouselCard
            isTv
            withLikeIcon
            key={movie.id}
            data={movie}
        />
    ))
}
