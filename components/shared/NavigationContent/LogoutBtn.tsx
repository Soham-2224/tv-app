"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"

// --components--
import CustomDialog from "@/components/ui/customDialog"
import { Button } from "@/components/ui/button"

// --icons--
import { LogOutIcon } from "lucide-react"

// --auth--
import { HankoContext } from "@/components/auth/HankoProvider"

export function LogoutBtn() {
    const router = useRouter()
    const hanko = useContext(HankoContext)

    const logout = async () => {
        if (!hanko) return
        try {
            await hanko?.user.logout()
            router.push("/login")
            router.refresh()
            return
        } catch (error) {
            console.error("Error during logout:", error)
        }
    }

    return hanko ? (
        <CustomDialog
            asChild={true}
            triggerClassNames="rounded-md"
            title="Log out"
            desc="Are you sure, you want to logout?"
            actionBtn={{
                name: "Log out",
                onClick: logout
            }}
        >
            <Button
                className=" w-full justify-start"
                variant="ghost"
            >
                <LogOutIcon
                    size={20}
                    className="mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                />
                Log out
            </Button>
        </CustomDialog>
    ) : null
}
