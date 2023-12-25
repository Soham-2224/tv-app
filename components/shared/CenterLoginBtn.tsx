import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogInIcon } from "lucide-react"

const CenterLoginBtn = () => {
    return (
        <div className="absolute w-full top-1/2 -translate-y-1/2 grid place-items-center px-4">
            <h1 className=" text-lg font-medium mb-4 text-center">Log in to save your favourite movies and tv shows</h1>
            <Link href="/login">
                <Button><LogInIcon size={20} className="mr-2" />Go to Login</Button>
            </Link>
        </div>
    )
}

export default CenterLoginBtn
