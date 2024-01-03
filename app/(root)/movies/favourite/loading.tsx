import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className=" p-4 md:p-6">
            <h1 className="title-bold">Loading...</h1>
            <div className="card-grid">
                {Array.from({length: 8}, (_, index) => ({ id: index + 1 })).map((movie) => (
                    <Skeleton className=" w-full h-64" />
                ))}
            </div>
        </main>
    )
}
