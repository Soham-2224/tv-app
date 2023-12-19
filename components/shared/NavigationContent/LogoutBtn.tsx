"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Hanko } from "@teamhanko/hanko-elements"
import CustomDialog from "@/components/ui/customDialog"
import { Button } from "@/components/ui/button"
import { LogOutIcon } from "lucide-react"

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL

export function LogoutBtn() {
    const router = useRouter()
    const [hanko, setHanko] = useState<Hanko>()

    useEffect(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) => setHanko(new Hanko(hankoApi ?? "")))
    }, [])

    const logout = async () => {
        try {
            await hanko?.user.logout()
            router.push("/login")
            router.refresh()
            return
        } catch (error) {
            console.error("Error during logout:", error)
        }
    }

    return (
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
    )
}
