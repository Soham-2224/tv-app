import React, { Suspense } from "react"
import Link from "next/link"

// --components--
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import PosterColumns from "./PosterColumns"
import PosterColumnSkeleton from "../Skeletons/PosterColumnSkeleton"

// --types--
import { MovieOrTv } from "@/typings"

export default function RightSidebar({type} : {type: MovieOrTv}) {
    return (
        <div className=" py-6 px-4 w-full h-full bg-background border-l border-border">
            <div className=" h-full">
                <h1 className="title-bold">{type === "movie" ? "Popular movies" : "Upcoming shows"}</h1>
                <ScrollArea className=" flex-1 h-full w-full pb-4">
                <Suspense fallback={<PosterColumnSkeleton />}>
                    <PosterColumns type={type} />
                </Suspense>
                </ScrollArea>
            </div>
        </div>
    )
}
