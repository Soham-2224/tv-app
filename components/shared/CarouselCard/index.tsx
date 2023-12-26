import React from "react"
import Image from "next/image"

// --types--
import { Favourite, Movie } from "@/typings"

// --utils--
import { cn } from "@/lib/utils"
import getImagePath from "@/lib/getImagePath"

// --components--
import RatingBadge from "@/components/shared/RatingBadge"
import LikeBtn from "@/components/shared/LikeBtn"
import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"

type Props = {
    isLarge?: boolean
    data: Movie | Favourite
    isTv?: boolean
    withLikeIcon?: boolean
}

const CarouselCard = ({ isLarge, data, isTv, withLikeIcon }: Props) => {
    const likeBtnProps = {
        backdrop_path: data?.backdrop_path,
        id: data?.id,
        original_title: data?.original_title,
        poster_path: data?.release_date,
        release_date: data?.release_date,
        title: data?.title,
        vote_average: data?.vote_average
    }

    return (
        <div className=" hover:scale-95 overflow-hidden group transition-transform duration-300 relative">
            <Image
                width={500}
                height={100}
                className="embla__slide__img"
                src={getImagePath({data, isLarge: true}) || ""}
                alt="Your alt text"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-gradient-to-t from-black/80 p-4 rounded-lg">
                <div className={cn("flex", isLarge && "justify-end", withLikeIcon && "justify-between")}>
                    {!isLarge ? (
                        <RatingBadge
                            rating={data?.vote_average}
                            isStar={!isLarge}
                        />
                    ) : (
                        <LikeBtn data={likeBtnProps} />
                    )}
                    {withLikeIcon ? <LikeBtn data={likeBtnProps} /> : null}
                </div>
                <div className="flex justify-between items-end gap-2">
                    <div>
                        <h1 className={cn("text-white font-semibold", isLarge && "text-2xl")}>{data?.title}</h1>
                        <h2 className={cn("text-white/60 font-medium", isLarge && "text-xl")}>
                            {new Date(data?.release_date).getFullYear()}
                        </h2>
                        {isLarge ? (
                            <div className="mt-2">
                                <RatingBadge
                                    classNames=" text-white/60"
                                    rating={data?.vote_average}
                                />
                            </div>
                        ) : null}
                    </div>
                    <Button className={cn("bg-primary/75 px-6", !isLarge && "rounded-full p-3")}>
                        {isLarge ? (
                            "Trailer"
                        ) : (
                            <PlayIcon
                                size={18}
                                color="white"
                                className=" fill-white"
                            />
                        )}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard
