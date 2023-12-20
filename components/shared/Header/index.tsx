import React from "react"
import Image from "next/image"

// --components--
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/ui/modeToggle"
import Menu from "./Menu"
import NavLinks from "./NavLinks"

const Header = () => {
    return (
        <header className="bg-background border-b border-border max-sm:py-1">
            <div className="flex justify-between items-center px-4 md:px-6">
                <div className="flex gap-6 md:gap-10 lg:gap-36 xl:gap-44 items-center">
                    <Image
                        src="/assets/Applogo.png"
                        width={45}
                        height={45}
                        alt="TV App Logo"
                        priority
                        className=" w-9 md:w-11 h-auto"
                    />
                    <div className="flex gap-4 items-center">
                        <NavLinks />
                    </div>
                </div>
                <div className=" flex-1 justify-end flex gap-4">
                    <Input
                        placeholder="Search movies, tv shows..."
                        className=" hidden md:inline-flex max-w-xs lg:hover:max-w-xl lg:focus:max-w-xl transition-all duration-100 ease-linear"
                    />
                    <div className="flex gap-2">
                        <ModeToggle />
                        <div className="md:hidden">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
