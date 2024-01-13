import { Skeleton } from "@/components/ui/skeleton"
import { clsx } from 'clsx'

const MovieDetailsSkeleton = () => {
    return (
        <>
            <div className="sticky top-0 left-0 w-full h-fit">
                <div className=" relative h-[40vh] md:h-[70vh] 2xl:h-[50vh] object-cover w-full"></div>
            </div>
            <div className=" block absolute top-0 left-0 w-full pt-4 section-padding">
                <div className="flex w-full justify-between items-center">
                    <Skeleton className=" w-14 h-5" />
                    <Skeleton className=" w-10 h-10 rounded-full" />
                </div>
            </div>
            <div className="relative block bg-background | dark-gradient section-padding max-sm:w-[100vw]">
                <div className="flex max-sm:flex-col md:items-center gap-5 relative -top-24">
                    <Skeleton className=" w-36 h-52 max-sm:mx-auto" />
                    <div className=" flex-1">
                        <Skeleton className=" w-2/3 h-6" />
                        <Skeleton className=" w-1/2 h-6 mt-2" />
                        <div className="flex items-center gap-2 mt-2">
                            <Skeleton className=" w-16 h-6 rounded-full" />
                            <Skeleton className=" w-16 h-6 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div className=" flex flex-col gap-1 text-sm font-medium">
                                {Array.from({ length: 2 }, (_, index) => ({ id: index + 1 })).map((movie, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-1 items-center"
                                    >
                                        <Skeleton className=" w-12 h-4 " />
                                        :
                                        <Skeleton className=" w-12 h-4 " />
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-1 items-center">
                                <Skeleton className=" w-14 h-14 rounded-full" />
                                <div>
                                    <Skeleton className=" w-8 h-4" />
                                    <Skeleton className=" w-16 h-4 mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 relative -translate-y-14">
                    <Skeleton className=" w-36 h-11" />
                    <div className="flex gap-1">
                        <Skeleton className=" w-16 h-4" />
                        <Skeleton className=" w-5 h-4" />
                    </div>
                </div>
                <Skeleton className=" w-1/4 h-5" />
                <Skeleton className=" w-full h-4 mt-3" />
                <Skeleton className=" w-full h-4 mt-2" />
                <Skeleton className=" w-full h-4 mt-2" />
            </div>
        </>
    )
}

export default MovieDetailsSkeleton
