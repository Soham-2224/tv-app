import { Skeleton } from "@/components/ui/skeleton"

const CardGridSkeleton = () => {
    return Array.from({ length: 8 }, (_, index) => ({ id: index + 1 })).map((movie) => (
        <Skeleton
            key={movie.id}
            className=" w-full h-64"
        />
    ))
}

export default CardGridSkeleton
