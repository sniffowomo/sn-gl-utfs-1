/**
 * This page is going to be all the work for the tailwind sandbox
 */
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import Showi from '../components/shb'

export default function Tws() {
	return (
		<main>
			<Showi />
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
				EX20 - Grid
			</h1>
			<p className="m-1 flex justify-center divide-x-8 divide-zinc-200 bg-slate-200 italic">
				Testing Grid Classes
			</p>
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}
			{/*Grid cols and rows*/}
			<h1 className="  flex justify-center bg-green-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
				Grid cols and rows
			</h1>
			<div className="grid grid-cols-3 gap-2 p-1 text-center">
				<div className="p-10 border border-blue-600 bg-blue-100">Item 1</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 2</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 3</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 4</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 5</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 6</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 7</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 8</div>
				<div className="p-10 border border-blue-600 bg-blue-100">Item 9</div>
			</div>
			{/*Col and row span*/}
			<h1 className="  flex justify-center bg-blue-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
				Column and row span
			</h1>
			Testing Spannings
			<div className="grid grid-cols-3 gap-2 p-1 text-center">
				<div className="p-10 col-span-2 border border-blue-600 bg-cyan-100">
					Item 1
				</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 2</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 3</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 4</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 5</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 6</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 7</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 8</div>
				<div className="p-10 border border-blue-600 bg-cyan-100">Item 9</div>
			</div>
			Row Spanning
			<div className="grid grid-cols-3 gap-2 p-1 text-center">
				<div className="p-10 col-span-2 row-span-2 border border-blue-600 bg-cyan-100">
					Item 1
				</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 2</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 3</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 4</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 5</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 6</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 7</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 8</div>
				<div className="p-10 border border-blue-600 bg-teal-100">Item 9</div>
			</div>
			Responsive Spannings both column and row
			<div className="grid grid-cols-3 gap-2 p-1 text-center">
				<div className="p-10 md:col-span-2 md:row-span-2 border border-blue-600 bg-cyan-100">
					Item 1
				</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 2</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 3</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 4</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 5</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 6</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 7</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 8</div>
				<div className="p-10 border border-blue-600 bg-rose-100">Item 9</div>
			</div>
		</main>
	)
}
