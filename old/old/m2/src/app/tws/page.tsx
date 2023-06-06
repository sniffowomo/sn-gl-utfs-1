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
			<h1 className="flex text-lg justify-center font-bold">Excercise 1</h1>
			<p className="flex justify-center">This is 01 from the sandbox</p>
			<div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
				<Image
					className="w-20 h-20"
					src={require("./img/warning.svg")}
					alt="its"
				/>
				<div className="text-2xl font-medium text-black">
					Are you sure
					<p className="text-slate-500 text-lg"> You are focked</p>
				</div>
			</div>
		</main>
	)
}
