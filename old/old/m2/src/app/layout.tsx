import "./globals.css"
import { Inter, Play } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const play = Play({ weight: "400", subsets: ["latin"] })

export const metadata = {
	title: "TW",
	description: "LUDTWSC",
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
