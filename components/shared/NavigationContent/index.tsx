"use client"

import React, { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// --components--
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { HankoProvider } from "@/components/auth/HankoProvider"
import { LogoutBtn } from "./LogoutBtn"

// --constants--
import { SIDEBAR_LINKS } from "@/lib/constants"

const NavigationContent = ({ setOpen }: { setOpen?: Dispatch<SetStateAction<boolean>> }) => {
    const pathName = usePathname()
    const getBasePath = (link: string) => {
        return pathName.includes("movies") ? `/movies${link}` : `/tv${link}`
    }

    const getNavLinks = () => {
        return SIDEBAR_LINKS.map((obj) => (
            <Link
                onClick={() => setOpen && setOpen(false)}
                key={obj.title}
                href={getBasePath(obj.link)}
            >
                <Button
                    className=" w-full justify-start"
                    variant={pathName === getBasePath(obj.link) ? "secondary" : "ghost"}
                >
                    {obj.icon(pathName === getBasePath(obj.link))}
                    <h3 className="xl:text-base">{obj.title}</h3>
                </Button>
            </Link>
        ))
    }

    return (
        <div className="h-full w-full flex flex-col justify-between items-center">
            <nav className=" w-full flex flex-col gap-2">
                {getNavLinks()}
                <Separator />
                <HankoProvider>
                    <LogoutBtn />
                </HankoProvider>
            </nav>
            <div className="flex gap-2 items-center">
                <small className=" text-muted-foreground">Powered by</small>
                <a href="https://www.themoviedb.org/" target="_blank">
                    <h1 className=" text-base font-bold bg-gradient-to-r from-[#90CEA1] to-[#00B3E5] px-1.5 rounded ">
                        TMDB
                    </h1>
                </a>
            </div>
        </div>
    )
}

export default NavigationContent
