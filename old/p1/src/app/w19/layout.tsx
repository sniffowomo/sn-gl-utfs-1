// TWS Layouts

import './tws.css'

import { Dancing_Script, Kanit, Orbitron, Play, Roboto } from 'next/font/google'

const play = Play({ weight: '400', subsets: ['latin'] })
const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
})
const dans = Dancing_Script({
	subsets: ['latin'],
	weight: ['400', '500', '700', '600'],
})

const kanit = Kanit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
})

const orbit = Orbitron({ subsets: ['latin'] })

export const metadata = {
	title: '19:FlexBox',
	description: 'LUDTWSC',
}

export default function TwsLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return (
		<section className={play.className}>
			<section>{children}</section>
		</section>
	)
}
