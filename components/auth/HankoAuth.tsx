"use client"

import { useEffect, useCallback, useState, useContext } from "react"
import { useRouter } from "next/navigation"

// --auth--
import { register, Hanko } from "@teamhanko/hanko-elements"
import { HankoContext } from "./HankoProvider"

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || ""

export default function HankoAuth() {
    const router = useRouter()
    const hanko = useContext(HankoContext)

    const redirectAfterLogin = useCallback(() => {
        // successfully logged in, redirect to a page in your application
        router.replace("/movies")
    }, [router])

    useEffect(() => {
        hanko?.onAuthFlowCompleted(() => {
            redirectAfterLogin()
        })
    }, [hanko, redirectAfterLogin])

    useEffect(() => {
        register(hankoApi).catch((error) => {
            // handle error
        })
    }, [])

    return <hanko-auth />
}
