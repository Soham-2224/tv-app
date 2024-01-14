import Image from "next/image"
import Link from "next/link"
import React from "react"

// --constants--
import { MOVIE_GENRES, TV_GENRES } from "@/lib/constants"

// --components--
import RatingBadge from "@/components/shared/RatingBadge"
import { Movie, MovieOrTv, TV } from "@/typings"
import getImagePath from "@/lib/getImagePath"
import { getTitle } from "@/lib/utils"

const SinglePosterColumn = ({ data, type } : {data : Movie | TV, type: MovieOrTv}) => {

    let genresToFilter = type === "movie" ? MOVIE_GENRES : TV_GENRES

    const filteredGenres = genresToFilter.filter((genre) => data?.genre_ids?.includes(genre.id))
        .map((genre) => genre.name)
        .join(", ")

    return (
        <Link
            href={`/${type === "movie" ? "movies" : "tv"}/${data?.id}`}
            className="flex items-center gap-4 max-w-full h-auto group"
        >
            <Image
                src={getImagePath({ data, isPoster: true })}
                blurDataURL="/assets/no-image-placeholder.png"
                placeholder="blur"
                width={70}
                height={105}
                alt={getTitle(data)}
                className="rounded-md"
            />
            <div className="flex flex-col justify-between gap-4">
                <div className="">
                    <h1 className=" line-clamp-2 group-hover:text-primary text-sm font-semibold">{getTitle(data)}</h1>
                    <p className="line-clamp-1 text-xs font-normal text-muted-foreground">{filteredGenres}</p>
                </div>
                <RatingBadge rating={data?.vote_average || 0} />
            </div>
        </Link>
    )
}

export default SinglePosterColumn
