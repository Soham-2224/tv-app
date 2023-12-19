"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// --components--
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { HankoProvider } from "@/components/auth/HankoProvider"
import { LogoutBtn } from "./LogoutBtn"

// --constants--
import { NAV_LINKS } from "@/lib/constants"

const NavigationContent = () => {
    const pathName = usePathname()

    const getNavLinks = () => {
        return NAV_LINKS.map((obj) => (
            <Link
                key={obj.title}
                href={obj.link}
            >
                <Button
                    className=" w-full justify-start"
                    variant={pathName === obj.link ? "secondary" : "ghost"}
                >
                    {obj.icon(pathName === obj.link)}
                    <h3 className="xl:text-base">{obj.title}</h3>
                </Button>
            </Link>
        ))
    }

    return (
        <div className="h-full flex flex-col justify-between items-center">
            <nav className=" w-full flex flex-col gap-2">
                {getNavLinks()}
                <Separator />
                <HankoProvider>
                    <LogoutBtn />
                </HankoProvider>
            </nav>
            <div className="flex gap-2">
                <small className=" text-muted-foreground">Powered by</small>
                <Image
                    src="/assets/tmdb.svg"
                    width={50}
                    height={20}
                    alt="tmdb logo"
                />
            </div>
        </div>
    )
}

export default NavigationContent
