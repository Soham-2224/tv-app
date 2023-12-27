import { SingleMovieDetail } from "@/typings"
import BackArrowBtn from "@/components/shared/BackArrowBtn"
import getImagePath from "@/lib/getImagePath"
import Image from "next/image"
import LikeBtn from "@/components/shared/LikeBtn"
import { Badge } from "@/components/ui/badge"
import CircularProgress from "@/components/ui/circularProgress"
import TrailerBtn from "./TrailerBtn"

const LabelValue = ({ label, children }: { label: string; children: any }) => {
    return (
        <div className="flex items-center gap-1">
            <p className=" text-muted-foreground">{label}:</p>
            <p>{children}</p>
        </div>
    )
}

const MovieDetail = ({ data }: { data: SingleMovieDetail }) => {
    const getMoneyValue = (value: number): string => {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
            value
        )
    }

    const getGenreBadges = () => {
        return data?.genres?.map((genre) => (
            <Badge
                key={genre.id}
                variant="outline"
                className=" py-2 px-4 border-black dark:border-border"
            >
                {genre.name}
            </Badge>
        ))
    }

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
                    <div className="flex-1">
                        <h1 className=" text-2xl font-bold">{data?.title || data?.original_title}</h1>
                        {data?.tagline ? (
                            <h1 className=" text-base font-medium text-muted-foreground">{data?.tagline}</h1>
                        ) : null}
                        <div className="flex items-center gap-2 mt-2">{getGenreBadges()}</div>
                        <div className="flex items-center justify-between mt-6">
                            <div className=" flex flex-col gap-1 text-sm font-medium">
                                <LabelValue label="Status">{data?.status}</LabelValue>
                                <LabelValue label="Released on">{data?.release_date}</LabelValue>
                                {data?.budget ? (
                                    <LabelValue label="Budget">{getMoneyValue(data.budget)}</LabelValue>
                                ) : null}
                            </div>
                            <div className="flex gap-1 items-center">
                                <CircularProgress vote={data?.vote_average} />
                                <div>
                                    <Image
                                        width={32}
                                        height={16}
                                        src="/assets/imdb.png"
                                        alt="imdb logo"
                                        className=" w-8 h-4"
                                    />
                                    <p className="text-sm font-medium mt-1">{data?.vote_count} votes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {data?.videos?.results?.length ? (
                    <TrailerBtn
                        videos={data.videos.results}
                        runtime={data?.runtime}
                    />
                ) : null}
            </div>
        </>
    )
}

export default MovieDetail
