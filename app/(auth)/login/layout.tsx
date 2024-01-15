import type { Metadata } from "next"

// --styles--
import "@/styles/globals.css"

// --components--
import { ThemeProvider } from "@/components/theme-provider"
import { HankoProvider } from "@/components/auth/HankoProvider"


export const metadata: Metadata = {
    title: "TV App Auth",
    description: "Login to TV app"
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        
            <div className="min-h-screen bg-background font-sans antialiased">
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
            </div>
    )
}
