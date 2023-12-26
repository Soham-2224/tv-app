
import BackArrowBtn from '@/components/shared/BackArrowBtn'
import { singleMovieDetail } from '@/lib/dummy'
import getImagePath from '@/lib/getImagePath'
import Image from 'next/image'

export default async function Page() {

    const data = singleMovieDetail

    return (
        <main className="relative">
            <div className="sticky top-0 left-0 w-full h-fit dark-graient">
                <Image
                    src={getImagePath(data, true)}
                    width={800}
                    height={600}
                    className=" relative h-auto w-full"
                    alt={data?.title || ""}
                />
            </div>
            <div className=" block relative z-10">
                <BackArrowBtn />
            </div>
        </main>
    )
}
