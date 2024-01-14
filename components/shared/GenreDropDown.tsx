"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { MOVIE_GENRES, TV_GENRES } from "@/lib/constants"
import { MovieOrTv } from "@/typings"
import { useRouter } from "next/navigation"

export function GenreDropDown({type}:{type: MovieOrTv}) {
    const router = useRouter()

    const genresToShow = type === "movie" ? MOVIE_GENRES : TV_GENRES

    return (
        <Select
            onValueChange={(value) => {
                router.push(`?with_genres=${value}`, {scroll: false})
            }}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
                {genresToShow.map((genre, idx) => (
                    <SelectItem
                        key={`${genre.id}_${idx}`}
                        value={`${genre.id}`}
                    >
                        {genre.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
