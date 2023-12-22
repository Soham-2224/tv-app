"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

// --components--
import CustomDialog from "@/components/ui/customDialog"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

// --icons--
import { LogInIcon, LogOutIcon } from "lucide-react"

// --auth--
import { HankoContext } from "@/components/auth/HankoProvider"

// --utils--
import { useUserData } from "@/lib/hooks/useUserData"

export function LogoutBtn() {
    const router = useRouter()
    const hanko = useContext(HankoContext)
    const {email, loading} = useUserData()

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

    if (loading) {
        return <Skeleton className="h-10 w-full rounded-lg" />
    }

    return hanko && email ? (
        <CustomDialog
            asChild={true}
            triggerClassNames="rounded-md"
            title={`Log out ${email}`}
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
    ) : (
        <Link href="/login">
            <Button
                className=" w-full justify-start"
                variant="ghost"
            >
                <LogInIcon
                    size={20}
                    className="mr-2 h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                />
                Log in
            </Button>
        </Link>
    )
}
