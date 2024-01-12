import Image from "next/image"

// --components
import { Badge } from "@/components/ui/badge"

// --icons--
import { StarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
    rating: number
    isStar?: boolean
    classNames?: String
}

const RatingBadge = ({ rating = 0, isStar = false, classNames }: Props) => {
    return (
        <Badge
            variant="secondary"
            className={cn(
                "gap-1 h-fit px-2 py-1 bg-black/50 text-white hover:bg-black/75",
                !isStar && "p-0 bg-transparent hover:bg-transparent text-foreground",
                classNames
            )}
        >
            {isStar ? (
                <StarIcon
                    size={16}
                    className=" text-yellow-400 fill-yellow-400"
                />
            ) : (
                <Image
                    width={32}
                    height={16}
                    src="/assets/imdb.png"
                    alt="imdb logo"
                    className=" w-8 h-4"
                />
            )}
            {rating?.toFixed(1)}
        </Badge>
    )
}

export default RatingBadge
