import { DiscoverSearchParams } from "@/app/(root)/movies/discover/page"

// --components--
import CarouselCard from "./CarouselCard"
import { fetchDiscoverMovies } from "@/lib/getMovies"

export default async function DiscoverResults({ searchParams }: DiscoverSearchParams) {

    const { with_genres, release_date_gte, release_date_lte, sort_by } = searchParams

    const data = await fetchDiscoverMovies({type: "movie", genre: with_genres, from_date: release_date_gte, to_date: release_date_lte, sort_by})

    return data?.map((movie) => (
        <div className=" w-full ">
        <CarouselCard
            isTv
            withLikeIcon
            key={movie.id}
            data={movie}
            />
        </div>
    ))
}
