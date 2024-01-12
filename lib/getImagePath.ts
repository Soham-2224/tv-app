import { Actor, Movie, TV } from "@/typings";
import { BASE_IMAGE_PATH } from "./constants";

type Props = {
    data?: Partial<Movie> | Partial<TV> & Partial<Actor>
    isLarge?: boolean
    isPoster?: boolean
}

const getImagePath = ({data, isLarge, isPoster} : Props) => {

  if (!data?.backdrop_path && !data?.poster_path ) return "/assets/no-image-placeholder.png"

  return `${BASE_IMAGE_PATH}${data?.backdrop_path && isLarge ? "w1280" : isLarge ? "original" : "w780"}${
      !isLarge && isPoster ? data?.poster_path || data?.backdrop_path : data?.backdrop_path || data?.poster_path
  }`
};

export default getImagePath;
