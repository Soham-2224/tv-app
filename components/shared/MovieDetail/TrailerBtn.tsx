"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Video } from "@/typings"
import { PlayIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"

const TrailerBtn = ({ videos, runtime }: { videos: Video[]; runtime: number }) => {
    const searchParams = useSearchParams()

    const watch = searchParams.get("watch")

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (!videos.length) return;
        setModalOpen(watch === "true")
    }, [])

    function findTrailer(videos: Video[]): Video {

        // First, try to find an "Official Trailer"
        const officialTrailer = videos.find((video) => video.name === "Official Trailer")
        if (officialTrailer) {
            return officialTrailer
        }

        // If no "Official Trailer" is found, find the first "Trailer"
        const trailer = videos.find((video) => video.type === "Trailer")
        return trailer ? trailer : videos[0]
    }

    function formatRuntime(runtime: number): string {
        const hours = Math.floor(runtime / 60)
        const minutes = runtime % 60
        return `${hours}h ${minutes}min`
    }

    let trailer = videos.length ? findTrailer(videos) : null;

    return (
        <div className="flex items-center gap-4 relative -translate-y-14">
            <Dialog open={modalOpen} onOpenChange={() => setModalOpen(prev => !prev)}>
                <DialogTrigger asChild>
                    <Button
                        disabled={!videos.length}
                        className=" px-9 py-6"
                    >
                        <PlayIcon
                            size={22}
                            fill="#fff"
                            className=" mr-1"
                        />
                        Trailer
                    </Button>
                </DialogTrigger>
                <DialogContent className=" max-sm:p-0 w-[99vw] md:w-[80vw] lg:w-[60vw] min-w-[99vw] md:min-w-[80vw] lg:min-w-[60vw]">
                    {trailer ?
                    <LiteYouTubeEmbed
                        id={trailer.key}
                        title={trailer.name}
                    /> : null}
                </DialogContent>
            </Dialog>
            <p className="text-base font-medium">{formatRuntime(runtime)}</p>
        </div>
    )
}

export default TrailerBtn
