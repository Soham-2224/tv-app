import { singleMovieReview } from "@/lib/dummy"
import ReviewCard from "./ReviewCard"
import { fetchReviews } from "@/lib/getMovies"
import { MovieOrTv } from "@/typings"

export default async function Reviews({type, id}: {type: MovieOrTv, id: number}) {
    const reviews = await fetchReviews(type, id)

    return (
        <div className="flex flex-col gap-8 mt-4">
            { reviews.length ? reviews.map((review) => (
                <ReviewCard
                    key={review.id}
                    data={review}
                />
            )) : <h1>No Reviews</h1>}
        </div>
    )
}
