import React from "react"

// --types--
import { Review } from "@/typings"
import RatingBadge from "../RatingBadge"
import { ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BASE_IMAGE_PATH } from "@/lib/constants"
import { Separator } from "@/components/ui/separator"

const ReviewCard = ({ data }: { data: Review }) => {
    return (
        <div>
            <div className=" bg-secondary p-3 rounded-lg rounded-bl-none">
                <p className=" line-clamp-5">{data?.content}</p>
                <div className="flex justify-between items-center mt-4">
                    <RatingBadge
                        rating={data?.author_details?.rating}
                        isStar
                    />
                    <a
                        className=" hover:underline flex gap-1 text-sm"
                        href={data?.url}
                        target="_blank"
                    >
                        View full review <ChevronRight size={18} />
                    </a>
                </div>
            </div>
            <div className="flex items-center mt-2">
                <Avatar>
                    <AvatarImage
                        src={`${BASE_IMAGE_PATH}/w138_and_h175_face/${data?.author_details?.avatar_path}`}
                        alt={data?.author}
                    />
                    <AvatarFallback>{data?.author.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <div className="flex max-sm:flex-col md:gap-2 md:items-center md:h-5 ml-2">
                    <h1 className=" text-base md:text-lg font-semibold">{data?.author}</h1>
                    <Separator
                        orientation="vertical"
                        className=" max-sm:hidden"
                    />
                    <h1 className=" text-sm font-semibold text-muted-foreground">
                        {new Date(data?.created_at).toDateString()}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
