import type { Metadata } from "next"
import { Inter } from "next/font/google"

// --styles--
import "@/styles/globals.css"

import { cn } from "@/lib/utils"

// --components--
import { ThemeProvider } from "@/components/theme-provider"
import { HankoProvider } from "@/components/auth/HankoProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
    title: "TV App",
    description: "TV App powered by TMDB"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
                <HankoProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </HankoProvider>
            </body>
        </html>
    )
}
