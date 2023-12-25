import React from "react"
import Link from "next/link"

// --components--
import PosterColumn from "./PosterColumn"
import { Button } from "@/components/ui/button"

const MOVIE_API_RES = [
    {
        id: 466420,
        poster_path: "",
        title: "Killers of the Flower Moon",
        genre_ids: [80, 18, 36],
        vote_average: 7.622
    },
    {
        id: 466420,
        poster_path: "",
        title: "Killers of the Flower Moon",
        genre_ids: [80, 18, 36],
        vote_average: 7.622
    },
    {
        id: 466420,
        poster_path: "",
        title: "Killers of the Flower Moon",
        genre_ids: [80, 18, 36],
        vote_average: 7.622
    },
    {
        id: 466420,
        poster_path: "",
        title: "Killers of the Flower Moon",
        genre_ids: [80, 18, 36],
        vote_average: 7.622
    }
]

const RightSidebar = () => {
    return (
        <div className=" hidden xl:block py-6 px-4 w-1/5 max-w-[250px] h-full bg-background border-l border-border">
            <div>
                <h1 className="title-bold">Popular movies</h1>
                <div className="flex flex-col gap-3 mt-4">
                    {MOVIE_API_RES?.slice(0, 4).map((movie) => (
                        <PosterColumn
                            key={movie.id}
                            data={movie}
                        />
                    ))}
                </div>
                <Link href="/">
                    <Button className=" block mx-auto mt-4 px-10">See More</Button>
                </Link>
            </div>
        </div>
    )
}

export default RightSidebar
