import "./globals.css"
import { Inter, Play } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "21",
  description: "Transition and transformation classes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

