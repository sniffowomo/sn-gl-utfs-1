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
				Excercise 7 - tws7
			</h1>
			<p className="flex justify-center divide-x-8 divide-zinc-800 bg-slate-200">
				Background and Shadows <br />
			</p>

			{/*Background Classes*/}
			<h2 className="  flex text-lg justify-center font-extrabold bg-green-400 pt-2 pb-2 m-1">
				Background Classes
			</h2>

			<div className="w-auto">
				<div>
					<Image
						className="mx-auto"
						src="https://i.ytimg.com/vi/b-aT5SGbX5o/maxresdefault.jpg"
						width="800"
						height="200"
						alt="fuqu"
						priority={true}
					/>
				</div>
			</div>

			{/*Gradients */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-blue-400 pt-2 pb-2 m-1">
				Excercise 7
			</h2>

			<div className="h-24 bg-gradient-to-l from-cyan-500 to-blue-500">
				<div className="text-center mx-auto shadow-lg">
					Gradient checkit
					<p>Spacing is being down with padding</p>
				</div>
			</div>

			{/*Shadows */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-orange-400 pt-2 pb-2 m-1">
				Excercise 7
			</h2>

			<div className="w-96 mt-4 ml-5 p-3 shadow text-center">
				Shadow <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
				reprehenderit sit, necessitatibus quis libero repellat ipsa doloremque
				nemo quaerat!
			</div>
			<div className="w-96 mt-4 ml-5 p-3 shadow-md text-center">
				Shadow-md <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
				reprehenderit sit, necessitatibus quis libero repellat ipsa doloremque
				nemo quaerat!
			</div>
			<div className="w-96 mt-4 ml-5 p-3 shadow-lg text-center">
				Shadow-lg <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
				reprehenderit sit, necessitatibus quis libero repellat ipsa doloremque
				nemo quaerat!
			</div>
			<div className="w-96 mt-4 ml-5 p-3 shadow-inner text-center">
				Shadow-inner <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
				reprehenderit sit, necessitatibus quis libero repellat ipsa doloremque
				nemo quaerat!
			</div>
			<div className="w-96 mt-4 ml-5 p-3 shadow-2xl text-center shadow-blue-500 ">
				Shadow-2xl-Colors <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
				reprehenderit sit, necessitatibus quis libero repellat ipsa doloremque
				nemo quaerat!
			</div>
			<div className="w-96 mt-4 ml-5 p-3 shadow-2xl shadow-red-600/20 text-center">
				Shadow-2xl-colors with opacity <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas
				reprehenderit sit, necessitatibus quis libero repellat ipsa doloremque
				nemo quaerat!
			</div>

			{/*Mix Blend */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-stone-400 pt-2 pb-2 m-1">
				Excercise 7
			</h2>
			<div className="flex justify-center -space-x-24">
				<div className="mix-blend-multiply bg-red-200">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
					nesciunt inventore voluptatibus deserunt quas labore mollitia, dolorum
					recusandae asperiores unde.
				</div>
				<div className="mix-blend-multiply bg-green-200">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id
					quasi exercitationem nam laborum autem libero illo nihil pariatur
					reiciendis.
				</div>
			</div>
		</main>
	)
}
