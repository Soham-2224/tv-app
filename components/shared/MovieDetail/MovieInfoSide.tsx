import Image from "next/image"

// --components--
import { Badge } from "@/components/ui/badge"
import CircularProgress from "@/components/ui/circularProgress"

// --types--
import { SingleMovieDetail, SingleTvDetail } from "@/typings"
import { getTitle, hasProperty } from "@/lib/utils"

const LabelValue = ({ label, children }: { label: string; children: any }) => {
    return (
        <div className="flex items-center gap-1">
            <p className=" text-muted-foreground">{label}:</p>
            <p>{children}</p>
        </div>
    )
}

const MovieInfoSide = ({ data }: { data: SingleMovieDetail | SingleTvDetail }) => {

    const budget = hasProperty(data, "budget")
    const numberOfEp = hasProperty(data, "number_of_episodes")
    const numberOfSeasons = hasProperty(data, "number_of_seasons")

    const getMoneyValue = (value: number): string => {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
            value
        )
    }

    const getGenreBadges = () => {
        return data?.genres?.map((genre) => (
            <Badge
                key={genre.id}
                variant="outline"
                className=" py-2 px-4 border-black dark:border-border"
            >
                {genre.name}
            </Badge>
        ))
    }

    return (
        <div className="flex-1">
            <h1 className=" text-2xl font-bold">{getTitle(data)}</h1>
            {data?.tagline ? <h1 className=" text-base font-medium text-muted-foreground">{data?.tagline}</h1> : null}
            <div className="flex items-center gap-2 mt-2">{getGenreBadges()}</div>
            <div className="flex items-center justify-between mt-6">
                <div className=" flex flex-col gap-1 text-sm font-medium">
                    <LabelValue label="Status">{data?.status}</LabelValue>
                    <LabelValue label="Released on">{ hasProperty(data, "release_date") ? data?.release_date : data?.first_air_date}</LabelValue>
                    {budget ? <LabelValue label="Budget">{getMoneyValue(data.budget)}</LabelValue> : null}
                    {numberOfEp ? <LabelValue label="Episodes">{data.number_of_episodes}</LabelValue> : null}
                    {numberOfSeasons ? <LabelValue label="Seasons">{data.number_of_seasons}</LabelValue> : null}
                </div>
                <div className="flex gap-1 items-center">
                    <CircularProgress vote={data?.vote_average} />
                    <div>
                        <Image
                            width={32}
                            height={16}
                            src="/assets/imdb.png"
                            alt="imdb logo"
                            className=" w-8 h-4"
                        />
                        <p className="text-sm font-medium mt-1">{data?.vote_count} votes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoSide
