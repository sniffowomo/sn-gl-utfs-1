// TWS Layouts

import "./tws.css"

import { Dancing_Script, Kanit, Play, Roboto } from "next/font/google"

const play = Play({ weight: "400", subsets: ["latin"] })
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
})
const dans = Dancing_Script({
	subsets: ["latin"],
	weight: ["400", "500", "700", "600"],
})

const kanit = Kanit({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
})

const ffonts = [play, roboto, dans, kanit]

export const metadata = {
	title: "4Typography",
	description: "LUDTWSC",
}

export default function TwsLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return <section className={kanit.className}>{children}</section>
}
