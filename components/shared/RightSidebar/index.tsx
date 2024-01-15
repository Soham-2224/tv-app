import React, { Suspense } from "react"
import Link from "next/link"

// --components--
import { Button } from "@/components/ui/button"
import PosterColumns from "./PosterColumns"
import PosterColumnSkeleton from "../Skeletons/PosterColumnSkeleton"

// --types--
import { MovieOrTv } from "@/typings"

export default function RightSidebar({type} : {type: MovieOrTv}) {
    return (
        <div className=" py-6 px-4 w-full h-full bg-background border-l border-border">
            <div>
                <h1 className="title-bold">{type === "movie" ? "Popular movies" : "Upcoming shows"}</h1>
                <Suspense fallback={<PosterColumnSkeleton />}>
                    <PosterColumns type={type} />
                </Suspense>
                <Link href={`/${type === "movie" ? "movies" : "tv"}/discover`}>
                    <Button className=" block mx-auto mt-4 px-10">See More</Button>
                </Link>
            </div>
        </div>
    )
}
