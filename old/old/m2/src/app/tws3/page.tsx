/**
 *
 * This page is going to be all the work for the tailwind sandbox
 *
 *
 */

import Image from "next/image"

export default function Tws() {
	return (
		<main>
			<h1 className="flex text-lg justify-center font-bold">Excercise 3</h1>
			<p className="flex justify-center">
				Container and spacing shit You need read about these HTML5 Classses
			</p>

			<h3 className="flex text-lg justify-center font-bold bg-black text-yellow-300">
				Container
			</h3>
			<div className="container mx-auto">
				<article>
					<h3 className="bg-orange-400 text-2xl font-bold">Article 1</h3>
					<p className=" font-extrabold indent-5 bg-clip-text text-transparent bg-gradient-to-r from-black to-red-900">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</article>
			</div>

			{/* Margin Class  */}
			<h3 className="flex text-lg justify-center font-bold bg-slate-500 text-yellow-300">
				Margin Testing 🍐
			</h3>

			<div className="bg-red-200 m-2"> Hello World</div>
			<div className="bg-red-200 ml-4"> Margin on left </div>
			<div className="bg-red-100 mr-4"> Margin on right </div>
			<div className="bg-violet-50 mt-4"> Margin on Top </div>
			<div className="bg-orange-50 mb-4 "> Margin on Top </div>
			<div className="bg-orange-50 mt-[20px] "> Margin on Top </div>

			<div className="container mx-auto">
				<article>
					<h3 className="bg-orange-400 text-2xl font-bold">Article 1</h3>
					<p className=" font-extrabold indent-5 bg-clip-text text-transparent bg-gradient-to-r from-black to-red-900">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</article>
			</div>

			<h3 className="flex text-lg justify-center font-bold bg-violet-950 text-yellow-300">
				Padding 🍐 - This how to add color that goes acrossv
			</h3>

			<div className="bg-red-200 p-2"> Hello World</div>
			<div className="bg-red-200 pl-4"> Margin on left </div>
			<div className="bg-red-100 pr-4"> Margin on right </div>
			<div className="bg-violet-50 pt-4"> Margin on Top </div>
			<div className="bg-orange-50 pb-4 "> Margin on Top </div>
			<div className="bg-orange-50 pt-[20px] "> Margin on Top </div>

			<h3 className="flex text-lg justify-center font-bold bg-cyan-900 text-yellow-300">
				Space Between - X
			</h3>
			<div className="flex mt-24 space-x-4 outline-red-300 outline-double ">
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
				<div>Item 5</div>
				<div>Item 6</div>
				<div>Item 7</div>
			</div>

			<h3 className="flex text-lg justify-center font-bold bg-cyan-900 text-yellow-300">
				Space Between - y
			</h3>
			<div className="flex flex-col mt-10 space-y-8 outline-red-300 outline-double ">
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
				<div>Item 5</div>
				<div>Item 6</div>
				<div>Item 7</div>
			</div>
		</main>
	)
}
