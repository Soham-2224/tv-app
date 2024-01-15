"use client"

// --components--
import CarouselCard from "@/components/shared/CarouselCard"
import CenterLoginBtn from "@/components/shared/CenterLoginBtn"
import CardGridSkeleton from "@/components/shared/Skeletons/CardGridSkeleton"

// --zustand--
import useUserStore from "@/store/useUser"

// --types--
import { Favourite } from "@/typings"

// --localstorage--
import useLocalStorage from "@rehooks/local-storage"

export default function Page() {
    const { email, loading, error } = useUserStore((state) => state)
    const [likedShows] = useLocalStorage<Favourite[]>("likedTvShows")

    if (error) return <CenterLoginBtn />

    return (
        <main className=" p-4 md:p-6">
            <h1 className="title-bold">Favourite TV Shows</h1>
            <div className="card-grid">
                {!loading ? likedShows?.map((movie) => (
                    <CarouselCard
                        isTv
                        withLikeIcon
                        key={movie.id}
                        data={movie}
                    />
                )) : <CardGridSkeleton />}
            </div>
        </main>
    )
}
