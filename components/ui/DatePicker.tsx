"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MovieOrTv } from "@/typings"

export function DatePicker({ className, type }: React.HTMLAttributes<HTMLDivElement> & {type: MovieOrTv}) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const genre = searchParams.get("with_genres")
    const from_date = searchParams.get("release_date_gte")
    const to_date = searchParams.get("release_date_lte")
    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined
    })

    useEffect(() => {
        // Reset the DatePicker when the URL changes and the date parameters are absent
        if (!from_date && !to_date) {
            setDate({ from: undefined, to: undefined })
        }
    }, [from_date, to_date])

    useEffect(() => {
        if (!date?.from || !date?.to) return

        const params = new URLSearchParams()

        // Add genre if it exists
        if (genre) {
            params.append("with_genres", genre)
        }

        // Format and append the dates
        params.append("release_date_gte", format(date.from, "yyyy-MM-dd"))
        params.append("release_date_lte", format(date.to, "yyyy-MM-dd"))

        // Construct the search string
        const searchString = params.toString()

        router.push(`/${type === "movie" ? "movies" : "tv"}/discover?${searchString}`)
    }, [date?.from, date?.to])

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        // id="date"
                        id={`${type}_datepicker`}
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto p-0"
                    align="start"
                >
                    <Calendar
                        initialFocus
                        mode="range"
                        // defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
