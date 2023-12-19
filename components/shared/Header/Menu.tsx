// -- components --
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"

// -- icons --
import { MenuIcon } from "lucide-react"
import NavigationContent from "../NavigationContent"

const Menu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    className="p-[10px]"
                    variant="outline"
                >
                        <MenuIcon size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className=" pt-12">
                <NavigationContent />
            </SheetContent>
        </Sheet>
    )
}

export default Menu
