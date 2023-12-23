import { HeartIcon } from "lucide-react"
import React, { SetStateAction, useEffect, useState } from "react"

const LikeBtn = ({ movieId }: { movieId: number }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false)

    useEffect(() => {
        const localValue = localStorage.getItem(`likedMovies`)?.includes(movieId.toString()) || false
        setIsLiked(localValue)
    }, [])

   const handleLikeClick = () => {
       const likedMovies = localStorage.getItem(`likedMovies`) || ""
       const movieIdString = movieId.toString()
       let updatedLikedMovies = likedMovies.split(",")

       if (isLiked) {
           updatedLikedMovies = updatedLikedMovies.filter((id) => id !== movieIdString)
       } else {
           updatedLikedMovies.push(movieIdString)
       }

       localStorage.setItem(`likedMovies`, updatedLikedMovies.join(","))
       setIsLiked(prev => !prev)
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
                <HeartIcon size={25} />
            )}
        </button>
    )
}

export default LikeBtn
