"use client"

// --components--
import CarouselCard from "@/components/shared/CarouselCard"
import CenterLoginBtn from "@/components/shared/CenterLoginBtn"
import Loading from "./loading"

// --zustand--
import useUserStore from "@/store/useUser"

// --types--
import { Favourite } from "@/typings"

// --localstorage--
import useLocalStorage from "@rehooks/local-storage"


export default function Page() {
    const { email, loading, error } = useUserStore((state) => state)
    const [likedMovies] = useLocalStorage<Favourite[]>("likedMovies")

    if (loading) return <Loading />
    
    if (error) return <CenterLoginBtn />


    return (
        <main className=" p-4 md:p-6">
            <h1 className="title-bold">Favourite Movies</h1>
            <div className="card-grid">
                {likedMovies?.reverse().map((movie) => (
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
