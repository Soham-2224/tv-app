import { singleMovieReview } from "@/lib/dummy"
import ReviewCard from "./ReviewCard"

export default async function Reviews() {
    const reviews = singleMovieReview

    return (
        <div className="flex flex-col gap-8 mt-4">
            {reviews.map((review) => (
                <ReviewCard
                    key={review.id}
                    data={review}
                />
            ))}
        </div>
    )
}
