"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export default function ErrorFetching() {
    const router = useRouter()

    return (
        <div className="w-full h-[90vh] grid place-items-center">
            <div className=" flex flex-col gap-4 items-center">
                <div>
                    <h1 className=" text-lg font-semibold text-center">Error fetching data</h1>
                    <p className=" text-sm font-medium text-muted-foreground">Refreshing might solve the problem</p>
                </div>
                <Button onClick={() => router.refresh()}>Refresh page</Button>
            </div>
        </div>
    )
}
