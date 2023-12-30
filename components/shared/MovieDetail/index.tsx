
import Image from "next/image"

// --types--
import { SingleMovieDetail } from "@/typings"

// --utils--
import getImagePath from "@/lib/getImagePath"

// --components--
import TrailerBtn from "./TrailerBtn"
import MovieInfoSide from "./MovieInfoSide"
import BackArrowBtn from "@/components/shared/BackArrowBtn"
import LikeBtn from "@/components/shared/LikeBtn"
import CastCard from "./CastCard"
import Casts from "./Casts"

const MovieDetail = ({ data }: { data: SingleMovieDetail }) => {

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
            <div className="relative block bg-background | dark-gradient section-padding">
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
                <h1 className=" text-2xl font-semibold">Overview</h1>
                <p className=" text-base font-medium mt-2">{data?.overview}</p>
                <Casts data={data?.credits} />
            </div>
        </>
    )
}

export default MovieDetail
