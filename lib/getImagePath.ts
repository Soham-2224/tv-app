import { Movie } from "@/typings";

const getImagePath = (data?: Movie, isLarge?: boolean) => {
  return `https://image.tmdb.org/t/p/${data?.backdrop_path && isLarge ? "w1280" : isLarge ? "original" : "w780"}${
      data?.backdrop_path || data?.poster_path
  }`
};

export default getImagePath;
