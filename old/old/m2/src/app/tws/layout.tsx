// TWS Layouts

import "./tws.css"

import { Play, Roboto } from "next/font/google"

const play = Play({ weight: "400", subsets: ["latin"] })
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
})

export default function TwsLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return <section className={roboto.className}>{children}</section>
}
