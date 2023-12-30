import Image from "next/image"

// --types--
import { Movie, Review, SingleMovieDetail } from "@/typings"

// --utils--
import getImagePath from "@/lib/getImagePath"

// --components--
import TrailerBtn from "./TrailerBtn"
import MovieInfoSide from "./MovieInfoSide"
import BackArrowBtn from "@/components/shared/BackArrowBtn"
import LikeBtn from "@/components/shared/LikeBtn"
import Casts from "./Casts"
import ReviewCard from "./ReviewCard"
import MoviesCarousel from "../MoviesCarousel"
import { Separator } from "@/components/ui/separator"

const MovieDetail = ({
    data,
    reviews,
    similarMovies
}: {
    data: SingleMovieDetail
    reviews?: Review[]
    similarMovies?: Movie[]
}) => {
    return (
        <>
            <div className="sticky top-0 left-0 w-full h-fit">
                <Image
                    src={getImagePath({ data, isLarge: true })}
                    width={800}
                    height={600}
                    className=" relative h-[40vh] md:h-[70vh] 2xl:h-[50vh] object-cover w-full"
                    alt={data?.title || ""}
                />
            </div>
            <div className=" block absolute top-0 left-0 w-full pt-4 section-padding">
                <div className="flex w-full justify-between items-center">
                    <BackArrowBtn />
                    <LikeBtn data={data} />
                </div>
            </div>
            <div className="relative block bg-background | dark-gradient section-padding max-sm:w-[100vw]">
                <div className="flex max-sm:flex-col md:items-center gap-5 relative -top-24">
                    <Image
                        src={getImagePath({ data, isPoster: true })}
                        width={150}
                        height={250}
                        alt={data?.title || ""}
                        className=" w-36 h-auto rounded-lg max-sm:mx-auto"
                    />
                    <MovieInfoSide data={data} />
                </div>
                <TrailerBtn
                    videos={data?.videos?.results?.length ? data?.videos?.results : []}
                    runtime={data?.runtime}
                    language={data?.original_language}
                />

                <h1 className=" title-bold">Overview</h1>
                <p className=" text-base font-medium mt-2">{data?.overview}</p>

                <Separator className=" my-10" />

                <Casts data={data?.credits} />

                <Separator className=" my-10" />

                {reviews ? (
                    <>
                        <h1 className="title-bold">Top Reviews</h1>
                        <div className="flex flex-col gap-8 mt-4">
                            {reviews.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    data={review}
                                />
                            ))}
                        </div>
                    </>
                ) : null}

                <Separator className=" my-10" />

                {similarMovies ? (
                    <MoviesCarousel
                        movies={similarMovies}
                        title="Similar movies"
                    />
                ) : null}
            </div>
        </>
    )
}

export default MovieDetail
