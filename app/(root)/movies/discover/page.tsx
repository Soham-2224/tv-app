import Link from "next/link"
import { Suspense } from "react"

// --components--
import DiscoverResults from "@/components/shared/DiscoverResults"
import { GenreDropDown } from "@/components/shared/GenreDropDown"
import { DatePicker } from "@/components/ui/DatePicker"
import { Button } from "@/components/ui/button"
import DiscoverFilter from "@/components/shared/DiscoverFilter"

export type DiscoverSearchParams = {
    searchParams: { [key: string]: string | undefined }
}

export default function Page({ searchParams }: DiscoverSearchParams) {
    return (
        <main className=" p-4 md:p-6">
            <h1 className="title-bold">Discover Movies</h1>
            <div className="grid grid-cols-2 sm:grid-cols-5 mt-8 gap-4 items-end">
                <div className="col-span-2 flex flex-col gap-3">
                    <label htmlFor="movie_genreDropDown">Select Genre</label>
                    <GenreDropDown type="movie" />
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                    <label htmlFor="movie_datepicker">
                        Released Date <small>*(optional)</small>
                    </label>
                    <DatePicker type="movie" />
                </div>
                <Link href="/movies/discover">
                    <Button
                        className="w-full"
                        variant="secondary"
                    >
                        Reset
                    </Button>
                </Link>
            </div>
            <div className="flex justify-between items-center mt-8">
                <h1 className="title-bold">Results</h1>
                <DiscoverFilter type="movie" />
            </div>
            <div className="card-grid mt-8">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <DiscoverResults searchParams={searchParams} />
                </Suspense>
            </div>
        </main>
    )
}
