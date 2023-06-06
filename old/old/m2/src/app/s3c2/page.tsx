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
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold">
				Excercise 11 - Breakpoint Classes and Interactvitity
			</h1>
			<p className="m-1 flex justify-center divide-x-8 divide-zinc-800 bg-slate-200 italic">
				Stuff for making wesbites responsive and mobile first
			</p>
			{/* Tailwind is mobile first */}
			{/* Tailwind is mobile first */}
			{/* Tailwind is mobile first */}
			<h1 className="  text-normal flex justify-center bg-teal-400 pb-2 pt-2 text-xl font-semibold">
				Tailwind is mobile first
			</h1>

			<ShoWi />

			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold">
				Color Changing Section
			</h1>
			<p className="m-5 border-2 border-green-600 border-e-red-600 bg-slate-100 p-4 text-center shadow-lg  shadow-rose-400 hover:bg-pink-600 hover:shadow-2xl hover:shadow-pink-700">
				The text below will keep changing colors based on width of the screen
			</p>
			<p className="bg-black text-center text-white sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 md:text-3xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
				reiciendis aliquid recusandae temporibus, neque dolore laudantium,
				quibusdam explicabo ullam perspiciatis minus debitis sit omnis earum
				modi dicta, labore fugiat eius harum. Quos exercitationem laudantium
				tempore eaque consequuntur, harum et esse odio similique cum sit
				reiciendis, culpa voluptatibus earum ab rem ducimus ea velit! Aliquid
				illum dolores porro molestiae deleniti sed nam modi? Delectus obcaecati
				molestias minus quia odit? Nulla, quos, animi consequuntur ipsa facere
				cumque explicabo ipsum maiores sapiente autem totam laborum quasi
				necessitatibus repellat modi mollitia tempore pariatur? Repudiandae,
				temporibus beatae minima necessitatibus assumenda corrupti. Iure vitae
				autem incidunt.
			</p>
		</main>
	)
}
