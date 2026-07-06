import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Sarthak Malviya | Web Developer",
  description:
    "Portfolio of Sarthak, a developer building modern web applications using Next.js, Flutter and Firebase.",
  keywords: ["Next.js Developer", "Web Developer", "Portfolio"],
  authors: [{ name: "Sarthak Malviya" }],
  openGraph: {
    title: "Sarthak Malviya | Portfolio",
    description: "Modern web developer portfolio",
    url: "https://sarthakdev.online",
    siteName: "SarthakDev",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
