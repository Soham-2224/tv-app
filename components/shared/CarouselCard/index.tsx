import React from "react"
import Image from "next/image"

// --types--
import { Favourite, Movie, TV } from "@/typings"

// --utils--
import { cn, getConditionalProperty, getTitle, hasProperty } from "@/lib/utils"
import getImagePath from "@/lib/getImagePath"

// --components--
import RatingBadge from "@/components/shared/RatingBadge"
import LikeBtn from "@/components/shared/LikeBtn"
import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"
import Link from "next/link"

type Props = {
    isLarge?: boolean
    data: Movie | TV | Favourite
    isTv?: boolean
    withLikeIcon?: boolean
}

const CarouselCard = ({ isLarge, data, isTv = false, withLikeIcon }: Props) => {
    const baseProps = {
        backdrop_path: data?.backdrop_path,
        id: data?.id,
        poster_path: data?.poster_path,
        vote_average: data?.vote_average
    }
    const likeBtnProps = !isTv
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

          const releasedDate : string = hasProperty(data, "release_date") ? data?.release_date : data?.first_air_date

    return (
        <div className=" hover:scale-95 overflow-hidden group transition-transform duration-300 relative">
            <Image
                width={500}
                height={100}
                blurDataURL="https://placehold.co/50x50/EEE/31343C/webp"
                placeholder="blur"
                className="embla__slide__img select-none"
                src={getImagePath({ data, isLarge: true })}
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
                        <LikeBtn
                            data={likeBtnProps}
                            type={isTv ? "tv" : "movie"}
                        />
                    )}
                    {withLikeIcon ? (
                        <LikeBtn
                            data={likeBtnProps}
                            type={isTv ? "tv" : "movie"}
                        />
                    ) : null}
                </div>
                <div className="flex justify-between items-end gap-2">
                    <Link href={`/${isTv ? "tv" : "movies"}/${data?.id}`}>
                        <h1 className={cn("text-white 2xl:text-3xl font-semibold", isLarge && "text-2xl 2xl:text-4xl")}>
                            {getTitle(data)}
                        </h1>
                        <h2 className={cn("text-white/60 2xl:text-2xl font-medium", isLarge && "text-xl 2xl:text-3xl")}>
                            {new Date(releasedDate).getFullYear() || ""}
                        </h2>
                        {isLarge ? (
                            <div className="mt-2">
                                <RatingBadge
                                    classNames=" text-white/60"
                                    rating={data?.vote_average}
                                />
                            </div>
                        ) : null}
                    </Link>
                    <Link href={`/${isTv ? "tv" : "movies"}/${data?.id}?watch=true`}>
                        <Button className={cn("bg-primary/75 px-6 2xl:px-7 2xl:py-10", !isLarge && "rounded-full p-3")}>
                            {isLarge ? (
                                "Trailer"
                            ) : (
                                <PlayIcon
                                    size={18}
                                    color="white"
                                    className=" fill-white 2xl:w-8 2xl:h-8"
                                />
                            )}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard
