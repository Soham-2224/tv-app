"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

// --components--
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

// --icons--
import { FilterIcon } from "lucide-react"

// --lib--
import { DISCOVER_FILTER_OPTIONS } from "@/lib/constants"

// --types--
import { MovieOrTv } from "@/typings"

export default function DiscoverFilter({type}: {type: MovieOrTv}) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const genre = searchParams.get("with_genres")
    const from_date = searchParams.get("release_date_gte")
    const to_date = searchParams.get("release_date_lte")
    const sort_by_param = searchParams.get("sort_by")
    const [sortByOption, setSortByOption] = useState<string>("")

     useEffect(() => {
         // Update the internal state if the URL query param 'with_genres' changes
         if (sort_by_param !== sortByOption) {
             setSortByOption(sort_by_param ?? "")
         }
     }, [sort_by_param])

    const onValueChange = (value : string) => {
        setSortByOption(value)

        const params = new URLSearchParams()

        // Add genre if it exists
        if (genre) {
            params.append("with_genres", genre)
        }
        if (from_date && to_date) {
            params.append("release_date_gte", from_date)
            params.append("release_date_lte", to_date)
        }

        params.append("sort_by", value)

        // Construct the search string
        const searchString = params.toString()

        router.push(`/${type === "movie" ? "movies" : "tv"}/discover?${searchString}`)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                >
                    <FilterIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={sortByOption}
                    onValueChange={(value) => onValueChange(value)}
                >
                    {DISCOVER_FILTER_OPTIONS.map((option) => (
                        <DropdownMenuRadioItem
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
