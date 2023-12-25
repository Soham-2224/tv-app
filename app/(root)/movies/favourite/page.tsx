"use client"

import CarouselCard from "@/components/shared/CarouselCard"
// --components--
import CenterLoginBtn from "@/components/shared/CenterLoginBtn"

// --zustand--
import useUserStore from "@/store/useUser"

// --types--
import { Favourite } from "@/typings"
import { useEffect, useState } from "react"

export default function Page() {
    const { email, loading, error } = useUserStore((state) => state)
    const [likedMovies, setLikedMovies] = useState<Favourite[]>()

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            let localMovies = JSON.parse(localStorage.getItem("likedMovies") || "[]") as Favourite[]
            setLikedMovies(localMovies.reverse())
        }
    }, [])

    if (loading) return <h1>Loading...</h1>

    if (error) return <CenterLoginBtn />

    return (
        <main className=" p-6">
            <h1 className="title-bold">Favourite Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
                {likedMovies?.map((movie) => (
                    <CarouselCard
                        withLikeIcon
                        key={movie.id}
                        data={movie}
                    />
                ))}
            </div>
        </main>
    )
}
