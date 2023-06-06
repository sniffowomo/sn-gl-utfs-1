// TWS Layouts

import "./tws.css"

import { Dancing_Script, Play, Roboto } from "next/font/google"

const play = Play({ weight: "400", subsets: ["latin"] })
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
})
const dans = Dancing_Script({
	subsets: ["latin"],
	weight: ["400", "500", "700", "600"],
})

export const metadata = {
	title: "3ContainerSpacing",
	description: "LUDTWSC",
}

export default function TwsLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return <section className={dans.className}>{children}</section>
}
