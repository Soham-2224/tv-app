import React from "react"
import Image from "next/image"

// --components--
import { ModeToggle } from "@/components/ui/modeToggle"
import SearchInput from "@/components/shared/SearchInput"
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
                    <SearchInput />
                    <div className="flex gap-2">
                        <ModeToggle />
                        <div className="lg:hidden">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
