import { Suspense } from "react"

// --components--
import MovieDetail from "@/components/shared/MovieDetail"
import MovieDetailsSkeleton from "@/components/shared/Skeletons/MovieDetailsSkeleton"

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params

    return (
        <main className="relative">
            <div className="pb-4 flex flex-col relative">
                <Suspense fallback={<MovieDetailsSkeleton />}>
                    <MovieDetail
                        type="tv"
                        id={id}
                    />
                </Suspense>
            </div>
        </main>
    )
}
