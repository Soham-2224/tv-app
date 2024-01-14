import Link from "next/link"
import { Suspense } from "react"

// --components--
import DiscoverResults from "@/components/shared/DiscoverResults"
import { GenreDropDown } from "@/components/shared/GenreDropDown"
import { DatePicker } from "@/components/ui/DatePicker"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export type DiscoverSearchParams = {
    searchParams: { [key: string]: string | undefined }
}

export default function Page({ searchParams }: DiscoverSearchParams) {
    return (
        <main className=" p-4 md:p-6">
            <h1 className="title-bold">Discover Movies</h1>
            <div className="grid grid-cols-2 sm:grid-cols-5 mt-8 gap-4 items-end">
                <div className="col-span-2 flex flex-col gap-3">
                    <Label>Select Genre</Label>
                    <GenreDropDown type="movie" />
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                    <Label>
                        Released Date <small>*(optional)</small>
                    </Label>
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
            <h1 className="title-bold mt-8">Results</h1>
            <div className="card-grid">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <DiscoverResults searchParams={searchParams} />
                </Suspense>
            </div>
        </main>
    )
}
