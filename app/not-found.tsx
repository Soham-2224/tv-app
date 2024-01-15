import  Link  from 'next/link'


export default function NotFoundPage() {
    return (
        <div className="w-full h-[90vh] grid place-content-center px-4">
            <div className=" max-w-2xl">

            <h1 className="text-lg font-semibold">Oops! The Page You're Looking for Seems to Have Gone on an Adventure.</h1>
            <p className="text-sm font-semibold text-muted-foreground mt-1">
                We can't find the page you're looking for. It might have been removed, had its name changed, or is
                temporarily unavailable. But don't worry, there's plenty more to explore:
            </p>
            <ul className=" mt-4 space-y-2">
                <li className=' underline text-blue-500 text-sm sm:list-disc'>
                    <Link href="/movies">Go to our Homepage</Link>
                </li>
                <li className=' underline text-blue-500 text-sm sm:list-disc'>
                    <Link href="/movies/discover">Discover Movies</Link>
                </li>
                <li className=' underline text-blue-500 text-sm sm:list-disc'>
                    <Link href="/tv/discover">Discover TV Shows</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}
