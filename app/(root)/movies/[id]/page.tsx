import BackArrowBtn from "@/components/shared/BackArrowBtn"
import { singleMovieDetail } from "@/lib/dummy"
import getImagePath from "@/lib/getImagePath"
import Image from "next/image"
import LikeBtn from "@/components/shared/LikeBtn"

export default async function Page() {
    const data = singleMovieDetail

    return (
        <main className="relative">
            <div className="sticky top-0 left-0 w-full h-fit">
                <Image
                    src={getImagePath(data, true)}
                    width={800}
                    height={600}
                    className=" relative h-auto w-full"
                    alt={data?.title || ""}
                />
            </div>
            <div className=" block absolute top-0 left-0 w-full pt-4 section-padding">
                <div className="flex w-full justify-between items-center">
                    <BackArrowBtn />
                    <LikeBtn data={data} />
                </div>
            </div>
            <div className="relative block bg-background | dark-gradient">
                <h1>diwieuwb</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
                <h1>fgsdfg</h1>
            </div>
        </main>
    )
}
