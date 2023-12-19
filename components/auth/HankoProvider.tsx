"use client"

import React, { useEffect, useState } from "react"

// --auth--
import { Hanko } from "@teamhanko/hanko-elements"

export const HankoContext = React.createContext<Hanko | null | undefined>(null)

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || ""

export const HankoProvider = ({children}:{children: React.ReactNode}) => {
    const [hanko, setHanko] = useState<Hanko | null>()

    useEffect(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) => setHanko(new Hanko(hankoApi)))
    }, [])

    return <HankoContext.Provider value={hanko}>{children}</HankoContext.Provider>
}
