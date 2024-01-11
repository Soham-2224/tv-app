import Image from "next/image"
import Link from "next/link"
import React from "react"

// --constants--
import { GENRES } from "@/lib/constants"

// --components--
import RatingBadge from "@/components/shared/RatingBadge"
import { Movie } from "@/typings"
import getImagePath from "@/lib/getImagePath"

const SinglePosterColumn = ({ data } : {data : Movie | undefined}) => {
    const filteredGenres = GENRES.filter((genre) => data?.genre_ids?.includes(genre.id))
        .map((genre) => genre.name)
        .join(", ")

    return (
        <Link
            href={`/movies/${data?.id}`}
            className="flex items-center gap-4 max-w-full h-auto group"
        >
            <Image
                src={getImagePath({ data, isPoster: true })}
                blurDataURL="/assets/no-image-placeholder.png"
                placeholder="blur"
                width={70}
                height={105}
                alt={data?.title || ""}
                className="rounded-md"
            />
            <div className="flex flex-col justify-between gap-4">
                <div className="">
                    <h1 className=" line-clamp-2 group-hover:text-primary text-sm font-semibold">{data?.title || data?.name}</h1>
                    <p className="line-clamp-1 text-xs font-normal text-muted-foreground">{filteredGenres}</p>
                </div>
                <RatingBadge rating={data?.vote_average || 0} />
            </div>
        </Link>
    )
}

export default SinglePosterColumn
