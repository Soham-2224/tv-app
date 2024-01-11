import RightSidebar from "@/components/shared/RightSidebar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ScrollArea className=" flex-1 h-full | max-section-width">{children}</ScrollArea>
            <div className="hidden xl:block w-1/5 max-w-[250px]">
                <RightSidebar type="movie" />
            </div>
        </>
    )
}
