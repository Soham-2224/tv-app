// --components--
import Header from "@/components/shared/Header"
import LeftSidebar from "@/components/shared/LeftSidebar"
import { Toaster } from "@/components/ui/sonner"

export default function ContainerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen bg-background font-sans antialiased">
            <div className=" h-full flex flex-col">
                <Header />
                <div className="flex-1 flex overflow-hidden">
                    <LeftSidebar />
                    {children}
                </div>
            </div>
            <Toaster richColors />
        </div>
    )
}
