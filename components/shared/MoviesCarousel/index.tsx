import { Movie } from '@/typings'
import React from 'react'


type Props = {
  isLarge?: boolean,
  movies: Movie[],
  title?: string
}

const MoviesCarousel = ({ isLarge, movies, title} : Props) => {
  return (
    <div>{movies && movies[0]?.title}</div>
  )
}

export default MoviesCarousel