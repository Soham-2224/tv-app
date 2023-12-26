import BackArrowBtn from "@/components/shared/BackArrowBtn"
import { singleMovieDetail } from "@/lib/dummy"
import getImagePath from "@/lib/getImagePath"
import Image from "next/image"
import LikeBtn from "@/components/shared/LikeBtn"
import { Badge } from "@/components/ui/badge"
import CircularProgress from "@/components/ui/circularProgress"

export default async function Page() {
    const data = singleMovieDetail

    return (
        <main className="relative">
            <div className="sticky top-0 left-0 w-full h-fit">
                <Image
                    src={getImagePath({ data, isLarge: true })}
                    width={800}
                    height={600}
                    className=" relative h-[60vh] md:h-[70vh] 2xl:h-[50vh] object-cover w-full"
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
                <div className="flex items-center gap-5 relative -top-24">
                    <Image
                        src={getImagePath({ data, isPoster: true })}
                        width={150}
                        height={250}
                        alt={data?.title || ""}
                        className=" w-36 h-auto rounded-lg"
                    />
                    <div className="flex-1">
                        <h1 className=" text-2xl font-bold">{data?.title || data?.original_title}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            {data?.genres?.map((genre) => (
                                <Badge
                                    variant="outline"
                                    className=" py-2 px-4"
                                >
                                    {genre.name}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div className=" text-sm font-medium">
                                <div className="flex items-center gap-1">
                                    <p className=" text-muted-foreground">Status:</p>
                                    <p>{data?.status}</p>
                                </div>
                                <div className="flex items-center gap-1 mt-2">
                                    <p className="text-muted-foreground">Released on:</p>
                                    <p>{data?.release_date}</p>
                                </div>
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
            </div>
        </main>
    )
}
