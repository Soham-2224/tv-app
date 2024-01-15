
// --utils--
import { fetchCarouselData } from '@/lib/getMovies'

// --components--
import SinglePosterColumn from './SinglePosterColumn'

// --types--
import { MovieOrTv } from '@/typings'

export default async function PosterColumns({ type }: { type: MovieOrTv }) {
    const fetchedData = await fetchCarouselData(type, type === "tv" ? "onTheAir" : "popular")

    return (
        <div className="flex flex-col gap-3 mt-4">
            {fetchedData?.map((movie) => (
                <SinglePosterColumn
                type={type}
                    key={movie.id}
                    data={movie}
                />
            ))}
        </div>
    )
}