"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Clock10Icon, CompassIcon, HeartIcon, HomeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { LogoutBtn } from "./LogoutBtn"

const NAV_LINKS = [
    {
        icon: (isActivb: boolean) => <HomeIcon className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${isActivb ? " text-primary" : " text-primary-foreground"}`} />,
        link: "/",
        title: "Home"
    },
    {
        icon: (isActivb: boolean) => <CompassIcon className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${isActivb ? " text-primary" : " text-primary-foreground"}`} />,
        link: "/discover",
        title: "Discover"
    },
    {
        icon: (isActivb: boolean) => <Clock10Icon className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${isActivb ? " text-primary" : " text-primary-foreground"}`} />,
        link: "/comming-soon",
        title: "Comming soon"
    },
    {
        icon: (isActivb: boolean) => <HeartIcon className={`mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 ${isActivb ? " text-primary" : " text-primary-foreground"}`} />,
        link: "/favourite",
        title: "Favourite"
    },
]

const NavigationContent = () => {
    const pathName = usePathname()

    const getNavLinks = () => {
        return NAV_LINKS.map((obj) => (
            <Link href={obj.link}>
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
                <LogoutBtn />
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
