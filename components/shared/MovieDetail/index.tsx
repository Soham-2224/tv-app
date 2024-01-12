import { Suspense } from "react"
import Image from "next/image"

// --types--
import { MovieOrTv } from "@/typings"

// --utils--
import getImagePath from "@/lib/getImagePath"

// --components--
import Casts from "./Casts"
import Reviews from "./Reviews"
import TrailerBtn from "./TrailerBtn"
import MovieInfoSide from "./MovieInfoSide"
import MoviesCarousel from "../MoviesCarousel"
import CarouselSkeleton from "../Skeletons/CarouselSkeleton"
import LikeBtn from "@/components/shared/LikeBtn"
import { Separator } from "@/components/ui/separator"
import BackArrowBtn from "@/components/shared/BackArrowBtn"

// --utils--
import { fetchDetails } from "@/lib/getMovies"
import { getConditionalProperty, getTitle, hasProperty } from "@/lib/utils"

export default async function MovieDetail({id, type}:{id:string, type: MovieOrTv}) {
    const data = await fetchDetails("movie", id)

     const baseProps = {
         backdrop_path: data?.backdrop_path,
         id: data?.id,
         poster_path: data?.poster_path,
         vote_average: data?.vote_average
     }
     const likeBtnProps = type === "movie"
         ? {
               ...baseProps,
               original_title: getConditionalProperty(data, "original_title"),
               release_date: getConditionalProperty(data, "release_date"),
               title: getConditionalProperty(data, "title")
           }
         : {
               ...baseProps,
               first_air_date: getConditionalProperty(data, "first_air_date"),
               name: getConditionalProperty(data, "name"),
               original_name: getConditionalProperty(data, "original_name")
           }

    return (
        <>
            <div className="sticky top-0 left-0 w-full h-fit">
                <Image
                    src={getImagePath({ data, isLarge: true })}
                    width={800}
                    height={600}
                    className=" relative h-[40vh] md:h-[70vh] 2xl:h-[50vh] object-cover w-full"
                    alt={getTitle(data)}
                />
            </div>
            <div className=" block absolute top-0 left-0 w-full pt-4 section-padding">
                <div className="flex w-full justify-between items-center">
                    <BackArrowBtn />
                    <LikeBtn data={likeBtnProps} type={type} />
                </div>
            </div>
            <div className="relative block bg-background | dark-gradient section-padding max-sm:w-[100vw]">
                <div className="flex max-sm:flex-col md:items-center gap-5 relative -top-24">
                    <Image
                        src={getImagePath({ data, isPoster: true })}
                        width={150}
                        height={250}
                        alt={getTitle(data)}
                        className=" w-36 h-auto rounded-lg max-sm:mx-auto"
                    />
                    <MovieInfoSide data={data} />
                </div>
                <TrailerBtn
                    videos={data?.videos?.results?.length ? data?.videos?.results : []}
                    runtime={hasProperty(data, "runtime") ? data.runtime : undefined}
                    language={data?.original_language}
                />

                <h1 className=" title-bold">Overview</h1>
                <p className=" text-base font-medium mt-2">{data?.overview}</p>

                <Separator className=" my-10" />

                <Casts data={data?.credits} />

                <Separator className=" my-10" />

                <h1 className="title-bold">Top Reviews</h1>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Reviews />
                </Suspense>

                <Separator className=" my-10" />

                <h1 className=" title-bold mb-4">Similar Movies</h1>
                <Suspense fallback={<CarouselSkeleton />}>
                    <MoviesCarousel
                        type="movie"
                        endpoint="similar"
                        id={data?.id}
                    />
                </Suspense>
            </div>
        </>
    )
}
