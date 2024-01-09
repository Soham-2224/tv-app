import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

const CarouselSkeleton = ({ isLarge }: { isLarge?: boolean }) => {
    return (
        <div className={cn("embla", isLarge && "isLarge")}>
            <div className="embla__viewport">
                <div className="embla__container">
                    {Array.from({ length: 8 }, (_, index) => ({ id: index + 1 })).map((movie, idx) => (
                        <div
                            key={`${movie.id}_${idx}`}
                            className="embla__slide"
                        >
                            <Skeleton
                                key={movie.id}
                                className=" embla__slide__img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselSkeleton
