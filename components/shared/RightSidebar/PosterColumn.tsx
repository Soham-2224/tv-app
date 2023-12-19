import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// --constants--
import { GENRES } from '@/lib/constants'

type Props = {
    data: {
        id: number
        poster_path?: string
        backdrop_path?: string
        title: string
        genre_ids: number[]
        vote_average: number
    }
}

const PosterColumn = ({data}: Props) => {

    const filteredGenres = GENRES.filter((genre) => data?.genre_ids?.includes(genre.id)).map((genre) => genre.name).join(", ")

  return (
      <Link href={"/"} className="flex items-center gap-4 max-w-full h-auto group">
              <Image
                  src="/assets/moviePoster.png"
                  width={70}
                  height={80}
                  alt={data?.title}
                  className="rounded-md "
              />
          <div className="flex flex-col justify-between gap-4">
            <div className="">

              <h1 className=" line-clamp-2 group-hover:text-primary text-sm font-semibold">{data?.title}</h1>
              <p className="line-clamp-1 text-xs font-normal text-muted-foreground">{filteredGenres}</p>
            </div>
              <div className="flex gap-2">
                  <img
                      src="/assets/imdb.png"
                      alt="imdb logo"
                      className=" w-8 h-4"
                  />
                  <small>{data?.vote_average?.toFixed(2)}</small>
              </div>
          </div>
      </Link>
  )
}

export default PosterColumn