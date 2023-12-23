"use client"

import { useState } from "react"

// -- components --
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavigationContent from "../NavigationContent"

// -- icons --
import { MenuIcon } from "lucide-react"

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <Sheet
            open={open}
            onOpenChange={setOpen}
        >
            <SheetTrigger asChild>
                <Button
                    className="p-[10px]"
                    variant="outline"
                >
                    <MenuIcon size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className=" pt-12"
            >
                <NavigationContent setOpen={setOpen} />
            </SheetContent>
        </Sheet>
    )
}

export default Menu
