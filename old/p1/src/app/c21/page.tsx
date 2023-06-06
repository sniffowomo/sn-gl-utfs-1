/**
 * This page is going to be all the work for the tailwind sandbox
 */

import Showi from '../components/shb'

export default function Tws() {
	return (
		<main>
			<Showi />
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
				EX21 - Tranform
			</h1>
			<p className="m-1 flex justify-center divide-x-8 divide-zinc-200 bg-slate-200 italic">
				Transforms and Transitions
			</p> 
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below=====bvc ================================== */}

			{/*Transition */}
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
				Transitions
			</h1>
			{/*Transition & Transform */}
			<h1 className="  flex justify-center bg-green-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
				Transition & Transform
			</h1>
			{/*Transform & Transition */}
			<h1 className="  flex justify-center bg-stone-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
				Transform & Transition
			</h1>
		</main>
	)
}
