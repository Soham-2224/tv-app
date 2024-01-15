"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

// --lib--
import { MOVIE_GENRES, TV_GENRES } from "@/lib/constants"

// --types--
import { MovieOrTv } from "@/typings"

export function GenreDropDown({ type }: { type: MovieOrTv }) {
    const router = useRouter()
    const genre_param = useSearchParams().get("with_genres")

    const [selectValue, setSelectValue] = useState<string>("")

    const genresToShow = type === "movie" ? MOVIE_GENRES : TV_GENRES

    useEffect(() => {
        // Update the internal state if the URL query param 'with_genres' changes
        if (genre_param !== selectValue) {
            setSelectValue(genre_param ?? "")
        }
    }, [genre_param])

    return (
        <Select
            value={selectValue}
            onValueChange={(value) => {
                setSelectValue(value)
                router.push(`?with_genres=${value}`, { scroll: false })
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
