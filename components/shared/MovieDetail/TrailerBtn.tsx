import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Video } from "@/typings"
import { PlayIcon } from "lucide-react"

const TrailerBtn = ({ videos, runtime }: { videos: Video[]; runtime: number }) => {
    function findTrailerKey(videos: Video[]): string | null {
        // First, try to find an "Official Trailer"
        const officialTrailer = videos.find((video) => video.name === "Official Trailer")
        if (officialTrailer) {
            return officialTrailer.key
        }

        // If no "Official Trailer" is found, find the first "Trailer"
        const trailer = videos.find((video) => video.type === "Trailer")
        return trailer ? trailer.key : null
    }

    function formatRuntime(runtime: number): string {
        const hours = Math.floor(runtime / 60)
        const minutes = runtime % 60
        return `${hours}h ${minutes}min`
    }

    let trailerKey = findTrailerKey(videos)

    return (
        <div className="flex items-center gap-4 relative -translate-y-14">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        disabled={!trailerKey}
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
                <DialogContent></DialogContent>
            </Dialog>
            <p className="text-base font-medium">{formatRuntime(runtime)}</p>
        </div>
    )
}

export default TrailerBtn
