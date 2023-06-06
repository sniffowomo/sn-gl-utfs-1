/**
 *
 * This page is going to be all the work for the tailwind sandbox
 *
 *
 */

import Image from "next/image"

export default function Tws() {
	return (
		<main className="justify-center">
			<div className="divide-y divide-dashed hover:divide-solid">
				<h1 className="flex text-lg justify-center font-bold">Excercise 2</h1>
				<p className="flex justify-center ">02 - Testing Colors</p>
			</div>

			{/* Text Colors 
			Background Colors 
			Text Underline 
			Border Colors 
			Divide Colors 
			Outline Colors 
			Box Shadow Colors (Opacity defaults to 100, but you can set it)
			Accent Colors 
			Arbitrary Colors  */}
			{/* Text Colors */}
			<div className="divide-y-4  divide-dashed hover:divide-solid">
				<p className="text-black"> Tailwind is the shizz</p>
				<p className="text-white "> Tailwind is the shizz</p>
				<p className="text-zinc-200"> Tailwind is the shizz</p>
				<p className="text-green-700"> Tailwind is the shizz</p>
				<p className="text-violet-800"> Tailwind is the shizz</p>
				<p className="text-red-900"> Tailwind is the shizz</p>
			</div>

			{/* /*Background Colors */}
			<h2 className="flex text-lg justify-center font-bold text-blue-900 bg-yellow-400">
				Background Colors
			</h2>
			<p className="text-black bg-emerald-200">
				Tailwind is the shizz - With BG colors
			</p>
			<p className="text-black bg-violet-200">
				Tailwind is the shizz - with BG colors{" "}
			</p>

			{/* Text Underline */}
			<h2 className="flex text-lg justify-center font-bold text-slate-50 bg-green-800">
				Text Underline
			</h2>
			<p className="text-violet-800 underline decoration-blue-600">
				Tailwind is the shizz - This is underline - with colors
			</p>
			<p className="text-black-800 underline decoration-red-600">
				Tailwind is the shizz - This is underline - with colors
			</p>

			{/* Border Colors with input  */}
			<h2 className="flex text-lg justify-center font-bold text-blue-900 bg-orange-400">
				Border Color This is with inputs
			</h2>
			<p>
				Need to figure out a way to make this shit bigger and do the styling for
				it
			</p>
			<div className="justify-center">
				<input
					type="text"
					placeholder="gaand"
					className="border border-blue-200"
				/>
				<input
					type="text"
					placeholder="gaand"
					className="border border-orange-200"
				/>
				<input
					type="text"
					placeholder="gaand"
					className="border border-red-200"
				/>
			</div>

			{/* Divider Colors  */}
			<h2 className="flex text-lg justify-center font-bold text-blue-900 bg-blue-200">
				Divider Colors
			</h2>
			<div className="divide-y divide-red-300 ">
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
			</div>

			{/* Outline Colors  */}
			<h2 className="flex text-lg justify-center font-bold text-violet-900 bg-orange-200">
				Button Outline Colors - Note the buttn input
			</h2>
			<p> This section has inputs in a button form</p>
			<button className="outline-double outline-red-500">hey</button>
			<button className="outline-double outline-blue-500">hey</button>
			<button className="outline-double outline-green-500">hey</button>
			<button className="shadow-lg bg-cyan-500 shadow-red-500/80">
				Subscribe
			</button>

			{/* Shadow Colors  */}
			<h2 className="flex text-lg justify-center font-bold text-violet-900 bg-purple-200">
				Outline Colors with shadows
			</h2>
			<div className="shadow-lg bg-cyan-500 shadow-cyan-500"> Subscribe </div>
			<div className="shadow-lg bg-cyan-500 shadow-purple-500/80">
				Subscribe
			</div>

			{/* Accent Colors  */}
			<h2 className="flex text-lg justify-center font-bold text-violet-900 bg-pink-200">
				Accent Colors - Ths is on checkboxes
			</h2>
			<input type="checkbox" className="accent-purple-500 checked" />
			<input type="checkbox" className="accent-cyan-500 checked" />

			{/* Arbitrary Colors  */}
			<h2 className="flex text-lg justify-center font-bold text-violet-900 bg-pink-200">
				Adding arbitraty colors to the page and text
			</h2>
			<div className="bg-[#f700de]/50">Hellow</div>
			<div className="bg-[rgb(255,0,0)]/50 text-[rgb(255,200,0)] accent-green-600">
				This is an example of arbitraty colors being done
			</div>
			<div className="bg-[greenyellow]/50 text-[rgb(255,30,30)] accent-green-600">
				This is an example of arbitraty colors being done
			</div>
			<h1 className="flex text-lg justify-center font-bold bg-red-700">
				Over bastard
			</h1>
		</main>
	)
}
