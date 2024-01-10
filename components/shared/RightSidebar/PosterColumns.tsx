import { fetchCarouselData } from '@/lib/getMovies'
import SinglePosterColumn from './SinglePosterColumn'

export default async function PosterColumns() {

    const fetchedData = await fetchCarouselData("movie", "popular")

    return (
        <div className="flex flex-col gap-3 mt-4">
            {fetchedData?.slice(0, 4).map((movie) => (
                <SinglePosterColumn
                    key={movie.id}
                    data={movie}
                />
            ))}
        </div>
    )
}