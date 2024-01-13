import Link from "next/link"
import dynamic from "next/dynamic"
const HankoAuth = dynamic(() => import("@/components/auth/HankoAuth"), { ssr: false })

// --components--
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
    return (
        <div className=" w-full h-screen grid place-items-center">
            <div className=" flex flex-col gap-4">
                <HankoAuth />
                <div className="flex flex-col gap-4 items-center px-8">
                <Separator className=" w-full" />
                <Link href="/movies" className="w-full">
                    <Button className="w-full">Skip login</Button>
                </Link>
                </div>
            </div>
        </div>
    )
}
