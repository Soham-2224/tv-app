import React, { useEffect, useState } from "react"

// --types--
import { Favourite } from "@/typings"

// --icons--
import { HeartIcon } from "lucide-react"

// --components--
import { toast } from "sonner"

const LikeBtn = ({ data }: { data: Favourite }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false)

    useEffect(() => {
        const likedMovies = JSON.parse(localStorage.getItem("likedMovies") || "[]") as Favourite[]
        const isMovieLiked = likedMovies.some((likedMovie) => likedMovie.id === data.id)
        setIsLiked(isMovieLiked)
    }, [data])

    const handleLikeClick = () => {
        const likedMovies = JSON.parse(localStorage.getItem("likedMovies") || "[]") as Favourite[]
        const updatedLikedMovies = isLiked
            ? likedMovies.filter((likedMovie) => likedMovie.id !== data.id)
            : [...likedMovies, data]

        localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies))
        if (isLiked) {
            toast.warning("Movie removed from favourites")
        } else {
            toast.success("Movie added to favourites")
        }
        setIsLiked(!isLiked)
    }

    return (
        <button
            onClick={handleLikeClick}
            className=" p-2 bg-black/50 rounded-full"
        >
            {isLiked ? (
                <HeartIcon
                    className=" text-primary fill-primary"
                    size={25}
                />
            ) : (
                <HeartIcon
                    className=" text-white"
                    size={25}
                />
            )}
        </button>
    )
}

export default LikeBtn
