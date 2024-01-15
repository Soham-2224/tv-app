import { notFound } from "next/navigation"
import { Suspense } from "react"

// --components--
import CardGridSkeleton from "@/components/shared/Skeletons/CardGridSkeleton"
import SearchedResults from "@/components/shared/SearchedResults"

type Props = {
    params: {
        term: string
    }
}

async function SearchPage({ params: { term } }: Props) {
    if (!term) notFound()

    const termToUse = decodeURI(term)

    return (
        <main className=" p-4 md:p-6">
            <h1 className="title-bold">Results for "{termToUse}"</h1>
            <div className="card-grid mt-8">
                <Suspense fallback={<CardGridSkeleton />}>
                    <SearchedResults
                        type="movie"
                        searchTerm={termToUse}
                    />
                </Suspense>
            </div>
        </main>
    )
}

export default SearchPage
