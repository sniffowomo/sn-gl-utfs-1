/**
 *
 * This page is going to be all the work for the tailwind sandbox
 *
 *
 */
import Image from "next/image"
import Link from "next/link"

export default function Tws() {
	return (
		<main>
			<h1 className="flex text-lg justify-center font-semibold bg-yellow-400 pt-2 pb-2">
				Excercise 5
			</h1>
			<p className="flex justify-center divide-x-8 divide-zinc-800 bg-slate-200">
				Sizing -
				<a
					href="https://tailwindcss.com/docs/width"
					target="_blank"
					className="text-blue-600 visited:text-purple-600 text-center"
				>
					Tailwind Main Docs Site (Opens in new window)
				</a>
			</p>
			{/* Width  */}
			<h2 className="flex text-lg justify-center font-semibold bg-yellow-400 ">
				Width
			</h2>
			<div className="bg-black text-white w-4"> Width is 4 </div>
			<div className="bg-black text-white w-48"> Width is 48 </div>
			<div className="bg-black text-white w-96"> Width is 96 </div>

			{/* Percentages  */}
			<h2 className="flex text-lg justify-center font-semibold bg-blue-400 ">
				Percentages
			</h2>
			<div className="bg-green-700 text-white w-1/4"> Width is 1/4</div>
			<div className="bg-green-700 text-white w-1/2"> Width is 1/2</div>
			<div className="bg-green-700 text-white w-1/3"> Width is 1/3</div>
			{/* Width of the viewport  */}
			<h2 className="flex text-lg justify-center font-semibold bg-green-400 ">
				Width of Viewport
			</h2>
			<div className="bg-blue-500 text-white w-screen"> Screen Width </div>
			{/* 100% of container  */}
			<h2 className="flex text-lg justify-center font-semibold bg-indigo-400 ">
				100% of container
			</h2>
			<div className="bg-green-800 text-white w-full">
				Screen Width in % this is w-full
			</div>
			{/* min/max content  */}
			<h2 className="flex text-lg justify-center font-semibold bg-teal-400 ">
				min/max content
			</h2>
			{/* Arbitrary width  */}
			<h2 className="flex text-lg justify-center font-semibold bg-pink-400 ">
				Arbitraty Width
			</h2>
			<div className="bg-blue-700 text-white w-[300px]">
				Width setting arbitraty values, follows the same blabla &[300px] like in
				this case
			</div>

			{/* Max Width  */}
			<h2 className="flex text-lg justify-center font-semibold bg-rose-400 ">
				Max Width
			</h2>
			<div className="bg-gray-50 text-black max-w-sm">
				max-s-sm : This is being used here Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Dicta iusto laudantium et, exercitationem,
				sint, iure numquam illo at quo veniam nesciunt aliquid suscipit iste
				libero eligendi? Suscipit, veniam hic. Libero.
			</div>
			<div className="bg-gray-200 text-black max-w-lg">
				max-w-lg : This is being used here Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Dicta iusto laudantium et, exercitationem,
				sint, iure numquam illo at quo veniam nesciunt aliquid suscipit iste
				libero eligendi? Suscipit, veniam hic. Libero.
			</div>
			<div className="bg-gray-400 text-black max-w-xs">
				max-s-xs : This is being used here Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Dicta iusto laudantium et, exercitationem,
				sint, iure numquam illo at quo veniam nesciunt aliquid suscipit iste
				libero eligendi? Suscipit, veniam hic. Libero.
			</div>

			{/* Height (Most of the same options as widths)  */}
			<h2 className="flex text-lg justify-center font-semibold bg-fuchsia-400 ">
				Height - Same as width
			</h2>
			<div className="flex items-center border border-spacing-2 outline-double outline-4 pt-3 pb-7 outline-cyan-800">
				<div className="bg-orange-500 w-20 h-24">
					Height Testing this is wiht a flex box
				</div>
				<div className="bg-orange-500 w-20 h-32">
					Height Testing this is wiht a flex box
				</div>
				<div className="bg-orange-500 w-20 h-40">
					Height Testing this is wiht a flex box
				</div>
				<div className="bg-orange-500 w-20 h-48">
					Height Testing this is wiht a flex box
				</div>
				<div className="bg-orange-500 w-20 h-64">
					Height Testing this is wiht a flex box
				</div>
				<div className="bg-orange-500 w-20 h-96">
					Height Testing this is wiht a flex box
				</div>
			</div>
			{/* Min Height  */}
			<h2 className="flex text-lg justify-center font-semibold bg-[#B6E2D3] ">
				Ninimum Height
			</h2>
			{/* Max Height  */}
			<h2 className="flex text-lg justify-center font-semibold bg-[#3c530f] ">
				Max Height
			</h2>
			{/* Full screen height  */}
			<h2 className="flex text-lg justify-center font-semibold bg-[#ff97d7] ">
				Full-Screen Height
			</h2>
			<div className="bg-blue-300 text-red-600 h-screen">
				Full Screen horizontal
			</div>
		</main>
	)
}
