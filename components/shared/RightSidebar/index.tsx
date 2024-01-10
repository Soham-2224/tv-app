import React, { Suspense } from "react"
import Link from "next/link"

// --components--
import { Button } from "@/components/ui/button"
import PosterColumns from "./PosterColumns"
import PosterColumnSkeleton from "../Skeletons/PosterColumnSkeleton"

export default function RightSidebar() {
    return (
        <div className=" hidden xl:block py-6 px-4 w-1/5 max-w-[250px] h-full bg-background border-l border-border">
            <div>
                <h1 className="title-bold">Popular movies</h1>
                <Suspense fallback={<PosterColumnSkeleton />}>
                    <PosterColumns />
                </Suspense>
                <Link href="/">
                    <Button className=" block mx-auto mt-4 px-10">See More</Button>
                </Link>
            </div>
        </div>
    )
}
