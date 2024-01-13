import { Favourite, SingleMovieDetail, SingleTvDetail } from "@/typings"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function hasProperty<T extends {}, K extends PropertyKey>(obj: T, key: K): obj is T & Record<K, any> {
    return obj && key in obj
}

// export function getConditionalProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] | "" {
//     return key in obj ? obj[key] : ""
// }

export function getConditionalProperty<T extends object, K extends string>(obj: T, key: K): any {
    return obj ? (obj as any)[key] || "" : ""
}

export function getTitle(data: SingleMovieDetail | SingleTvDetail | Favourite) {
    let title

    if (hasProperty(data, "title") && hasProperty(data, "original_title")) {
        title = data?.title || data?.original_title
    } else {
        title = data?.name || data?.original_name
    }

    return title;
}