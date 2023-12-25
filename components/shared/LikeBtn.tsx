import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

// --types--
import { Favourite } from "@/typings"

// --icons--
import { HeartIcon } from "lucide-react"

// --components--
import { toast } from "sonner"

// --zustand--
import useUserStore from "@/store/useUser"

const LikeBtn = ({ data }: { data: Favourite }) => {
    const router = useRouter()
    const pathname = usePathname()
    const storedUser = useUserStore((state) => state.email)
    const [isLiked, setIsLiked] = useState<boolean>(false)

    useEffect(() => {
        const likedMovies = JSON.parse(localStorage.getItem("likedMovies") || "[]") as Favourite[]
        const isMovieLiked = likedMovies.some((likedMovie) => likedMovie.id === data.id)
        setIsLiked(isMovieLiked)
    }, [data])

    const handleLikeClick = () => {
        if (!storedUser.length) {
            return toast("Log in to add a movie as a favorite.", {
                action: {
                    label: "Login",
                    onClick: () => router.push("/login")
                }
            })
        }

        const likedMovies = JSON.parse(localStorage.getItem("likedMovies") || "[]") as Favourite[]
        const updatedLikedMovies = isLiked
            ? likedMovies.filter((likedMovie) => likedMovie.id !== data.id)
            : [...likedMovies, data]

        localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies))
        if (isLiked) {
            if (pathname.includes("favourite")) {
                toast("Movie removed from favourites", {
                    action: {
                        label: "Undo",
                        onClick: () => localStorage.setItem("likedMovies", JSON.stringify([...updatedLikedMovies, data]))
                    }
                })
                setIsLiked(true)
                return
            }
            toast.warning("Movie removed from favourites")
        } else {
            toast.success("Movie added to favourites")
        }
        setIsLiked((prev) => !prev)
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
