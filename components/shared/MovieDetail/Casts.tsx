
// --types--
import { Actor, Crew } from "@/typings"

// --components--
import CastCard from "./CastCard"
import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { DialogContent } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const Casts = ({ data }: { data: { cast: Actor[]; crew: Crew[] } }) => {
    const getCasts = () => {
        return data?.cast?.slice(0, 9)?.map((cast) => <CastCard data={cast} />)
    }

    return (
        <>
            <h1 className=" text-2xl font-semibold mt-20">Top Casts</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 mt-4">{getCasts()}</div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className=" mt-8 px-10">View all</Button>
                </DialogTrigger>
                <DialogContent className=" w-[90%] max-section-width">
                    <ScrollArea className=" h-[80vh] sm:h-[70vh] ">
                        <DialogHeader className=" text-2xl font-semibold">Casts</DialogHeader>
                        {
                            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                {data?.cast?.map((cast) => (
                                    <CastCard data={cast} />
                                ))}
                            </div>
                        }
                        <Separator className=" mt-10" />
                        <DialogHeader className=" text-2xl font-semibold mt-10">Crew</DialogHeader>
                        {
                            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                {data?.crew?.map((crew) => (
                                    <CastCard data={crew} />
                                ))}
                            </div>
                        }
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Casts
