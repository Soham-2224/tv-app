import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

const PosterColumnSkeleton = () => {
    return (
        <div className="flex flex-col gap-3 mt-4">
            {Array.from({ length: 4 }, (_, index) => ({ id: index + 1 })).map((movie, idx) => (
                <div
                    key={idx}
                    className="flex items-center gap-4 max-w-full h-[105px] group"
                >
                    <Skeleton className="rounded-md min-w-[70px] h-full " />
                    <div className="flex flex-col justify-between gap-4 w-full">
                        <div>
                            <Skeleton className=" w-full h-3" />
                            <Skeleton className=" w-1/2 h-3 mt-1" />
                            <Skeleton className=" w-full h-3 mt-1.5" />
                        </div>
                        <div className="flex gap-1">
                            <Skeleton className=" w-8 h-3" />
                            <Skeleton className=" w-8 h-3" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PosterColumnSkeleton
