/**
 * This page is going to be all the work for the tailwind sandbox
 */
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import ShoWi from './shb'

export default function Tws() {
	return (
		<main>
			<ShoWi />
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold">
				Excercise 13 - Flexbox
			</h1>
			<p className="m-1 flex justify-center divide-x-8 divide-zinc-800 bg-slate-200 italic">
				Main Class USed 
			</p>

			
		</main>
	)
}
