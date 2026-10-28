import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Center Point — Your money, at the centre.",
  description:
    "Send money to any Nigerian bank in seconds, buy airtime and data, and pay bills — for you and your business, all in one simple app.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", inter.variable)}
    >
      <body className="min-h-screen bg-[#15193B] text-[#0E1028] selection:bg-[#FF6B2C] selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
