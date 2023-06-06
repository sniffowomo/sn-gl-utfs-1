/**
 * This page is going to be all the work for the tailwind sandbox
 */
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'

export default function Tws() {
	return (
		<main>
			<h1 className="  flex text-lg justify-center font-extrabold bg-fuchsia-400 pt-2 pb-2">
				Excercise 8 - tws7
			</h1>
			<p className="flex justify-center divide-x-8 divide-zinc-800 bg-slate-200 m-1">
				Borders <br />
			</p>

			{/*Border Width & Colors */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-green-400 pt-2 pb-2">
				Border Width & Colors
			</h2>

			<div className="w-96 m-3 p-5 border">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="w-96 m-3 p-5 border-2 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="w-96 m-3 p-5 border-4 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="w-96 m-3 p-5 border-8 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>

			<div className="w-96 m-3 p-5 border-x-2 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="w-96 m-3 p-5 border-y-8 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="w-96 m-3 p-5 border-t-8 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="w-96 m-3 p-5 border-b-8 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>

			<div className="w-96 m-3 p-5 border-r-8 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="w-96 m-3 p-5 border-l-8 border-green-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>

			{/*Border Radius */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-blue-400 pt-2 pb-2">
				Border Radius
			</h2>

			<div className="mx-auto w-96 m-3 p-5 border-4 border-green-600 rounded-full text-center bg-slate-400">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>
			<div className="mx-auto w-96 m-3 p-5 border-4 border-green-600 rounded-t-3xl text-center bg-slate-200">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
				alias.
			</div>

			{/*Outline */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-stone-400 pt-2 pb-2">
				Outline
			</h2>

			{/* Using buttons in this sections */}

			<div className="mx-auto">
				<button className="outline m-3 p-5 outline-red-400 outline-4 outline-offset-2">
					{' '}
					click{' '}
				</button>
			</div>
		</main>
	)
}
