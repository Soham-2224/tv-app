import { DiscoverSearchParams } from "@/app/(root)/movies/discover/page"

// --components--
import CarouselCard from "./CarouselCard"
import { fetchDiscoverMovies } from "@/lib/getMovies"
import { MovieOrTv } from "@/typings"

export default async function DiscoverResults({ searchParams, type}: DiscoverSearchParams & {type: MovieOrTv}) {
    const { with_genres, release_date_gte, release_date_lte, sort_by } = searchParams

    const data = await fetchDiscoverMovies({
        type: type,
        genre: with_genres,
        from_date: release_date_gte,
        to_date: release_date_lte,
        sort_by
    })

    return data?.map((movie) => (
        <div className=" w-full ">
            <CarouselCard
                isTv={type === "tv"}
                withLikeIcon
                key={movie.id}
                data={movie}
            />
        </div>
    ))
}
