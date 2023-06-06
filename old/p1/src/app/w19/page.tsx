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
				EX19 - FlexBox Stuff
			</h1>
			<p className="m-1 flex justify-center divide-x-8 divide-zinc-200 bg-slate-200 italic">
				Text in columns
			</p>

			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}
			{/**============================Actual code below======================================= */}

			{/*Flex and alignment */}
			<h1 className=" flex justify-center bg-blue-400 pb-2 pt-2 text-lg ">
				Flex and alignment
			</h1>
			<div className="flex flex-wrap items-center justify-between h-72 w-full bg-slate-100">
				<div className="p-10 border border-green-300 bg-green-100">01</div>
				<div className="p-10 border border-green-300 bg-green-100">02</div>
				<div className="p-10 border border-green-300 bg-green-100">03</div>
				<div className="p-10 border border-green-300 bg-green-100">04</div>
			</div>

			{/*Flex Column, Gap and Order */}
			<div className="flex flex-col gap-4 items-center justify-between h-auto w-full bg-slate-100">
				<div className="p-10 border border-blue-300 bg-blue-100">01</div>
				<div className="p-10 border border-blue-300 bg-blue-100">02</div>
				<div className="p-10 order-4 border border-blue-300 bg-blue-100">
					03
				</div>
				<div className="p-10 order-1 border border-blue-300 bg-blue-100">
					04
				</div>
			</div>
			<h1 className="  flex justify-center bg-green-400 pb-2 pt-2 text-lg ">
				Flex Column, Gap and Order
			</h1>
			{/*Grow and shrink */}
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg ">
				Grow and shrink
			</h1>

			<div className="flex w-full bg-slate-100">
				<div className="flex-initial p-10 w-64 border border-teal-300 bg-teal-100">
					01
				</div>
				<div className="flex-none p-10 w-64 border border-teal-300 bg-teal-100">
					02
				</div>
				<div className="flex-auto p-10 w-64 border border-teal-300 bg-teal-100">
					03
				</div>
				<div className="flex-1 p-10 border border-teal-300 bg-teal-100">04</div>
				<div className="p-10 border border-teal-300 bg-teal-100">05</div>
				<div className="p-10 border border-teal-300 bg-teal-100">06</div>
				<div className="p-10 border border-teal-300 bg-teal-100">07</div>
			</div>

			<div className="flex">
				<div className="flex-1 bg-blue-400 text-center">hello</div>
				<div className="flex-1 bg-blue-400 text-center">hello</div>
				<div className="flex-1 bg-blue-400 text-center">hello</div>
			</div>
		</main>
	)
}
