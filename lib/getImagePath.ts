import { Movie } from "@/typings";

type Props = {
    data?: Partial<Movie>
    isLarge?: boolean
    isPoster?: boolean
}

const getImagePath = ({data, isLarge, isPoster} : Props) => {

  if (!data?.backdrop_path && !data?.poster_path) return "/assets/no-image-placeholder.png"

  return `https://image.tmdb.org/t/p/${data?.backdrop_path && isLarge ? "w1280" : isLarge ? "original" : "w780"}${
      !isLarge && isPoster ? data?.poster_path || data?.backdrop_path : data?.backdrop_path || data?.poster_path
  }`
};

export default getImagePath;
