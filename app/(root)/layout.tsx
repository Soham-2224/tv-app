import type { Metadata } from "next"
import { Inter } from "next/font/google"

// --styles--
import "@/styles/globals.css"

import { cn } from "@/lib/utils"

// --components--
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/shared/Header"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
    title: "TV App",
    description: "TV App powered by TMDB"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn("h-screen bg-background font-sans antialiased", inter.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className=" h-full flex flex-col">
                        <Header />
                        <div className="flex-1 flex">
                            <LeftSidebar />
                            <div className="flex-1">{children}</div>
                            <RightSidebar />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
