"use client"

import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

// --types--
import { Favourite, MovieOrTv } from "@/typings"

// --icons--
import { HeartIcon } from "lucide-react"

// --components--
import { toast } from "sonner"

// --zustand--
import useUserStore from "@/store/useUser"

// --localstorage--
import { useLocalStorage, writeStorage } from "@rehooks/local-storage"

const LikeBtn = ({ data, type }: { data: Favourite, type: MovieOrTv }) => {
    const router = useRouter()
    const pathname = usePathname()
    const storedUser = useUserStore((state) => state.email)
    const [likedMovies] = useLocalStorage<Favourite[]>(type === "movie" ? "likedMovies" : "likedTvShows")
    const [isLiked, setIsLiked] = useState<boolean>(false)

    useEffect(() => {
        if (likedMovies) {
            const isMovieLiked = likedMovies.some((likedMovie) => likedMovie.id === data.id)
            setIsLiked(isMovieLiked)
        }
    }, [data])

    const handleLikeClick = () => {
        if (!storedUser.length) {
            return toast(`Log in to add a ${type === "movie" ? "movie" : "show"} as a favorite.`, {
                action: {
                    label: "Login",
                    onClick: () => router.push("/login")
                }
            })
        }

        const currentLikedMovies = likedMovies ?? []

        const updatedLikedMovies = isLiked
            ? currentLikedMovies?.filter((likedMovie) => likedMovie.id !== data.id)
            : [data, ...currentLikedMovies]

        writeStorage( type === "movie" ? "likedMovies" : "likedTvShows", updatedLikedMovies)

        if (isLiked) {
            if (pathname.includes("favourite")) {
                toast("Movie removed from favourites", {
                    action: {
                        label: "Undo",
                        onClick: () =>
                            writeStorage(type === "movie" ? "likedMovies" : "likedTvShows", [
                                data,
                                ...updatedLikedMovies
                            ])
                    }
                })
                setIsLiked(true)
                return
            }
            toast.warning(`${type === "movie" ? "movie" : "tv show"} removed from favourites`)
        } else {
            toast.success(`${type === "movie" ? "movie" : "tv show"} added to favourites`)
        }
        setIsLiked((prev) => !prev)
    }

    return (
        <button
            onClick={handleLikeClick}
            className=" p-2 2xl:p-4 bg-black/50 rounded-full"
        >
            {isLiked ? (
                <HeartIcon
                    className=" text-primary fill-primary 2xl:w-10 2xl:h-10"
                    size={25}
                />
            ) : (
                <HeartIcon
                    className=" text-white 2xl:w-10 2xl:h-10"
                    size={25}
                />
            )}
        </button>
    )
}

export default LikeBtn
