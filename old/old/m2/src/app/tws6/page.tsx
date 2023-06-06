/**
 *
 * This page is going to be all the work for the tailwind sandbox
 *
 *
 */
import Image from 'next/image'
import Link from 'next/link'

export default function Tws() {
	return (
		<main>
			<h1 className="  flex text-lg justify-center font-extrabold bg-fuchsia-400 pt-2 pb-2">
				Excercise 5
			</h1>
			<p className="flex justify-center divide-x-8 divide-zinc-800 bg-slate-200">
				Layout & Position - Font is Orbitron <br />
			</p>
			{/*Positioning */}
			<h2 className="  flex justify-center bg-blue-400 pt-1 pb-1">
				Positioning
			</h2>
			<div className="relative h-12 bg-red-200 w-1/2">
				<p>Parent Element</p>
				<div className="absolute bottom-0 right-0 bg-red-500">
					<p>Absolute child</p>
				</div>
			</div>
			{/*Top left corner */}
			<h2 className="  flex justify-center bg-green-400 pt-1 pb-1">
				Top Left Corner
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
			</div>
			{/*Top right corner */}
			<h2 className="  flex justify-center bg-orange-400 pt-1 pb-1">
				Top Right Corner
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
			</div>
			{/*Bottom left corner */}
			<h2 className="  flex justify-center bg-teal-400 pt-1 pb-1">
				Bottom Left Corner
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
			</div>
			{/*Bottom right corner */}
			<h2 className="  flex justify-center bg-rose-400 pt-1 pb-1">
				Bottom Right Corner
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
			</div>
			{/*Span top edge */}
			<h2 className="  flex justify-center bg-zinc-400 pt-1 pb-1">
				Span Top Edge
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute right-0 h-16 inset-x-0 bg-yellow-300"></div>
			</div>
			{/*Span left edge */}
			<h2 className="  flex justify-center bg-amber-400 pt-1 pb-1">
				Span Left Edge
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute left-0 inset-y-0 w-16 bg-yellow-300"></div>
			</div>
			{/*Span right edge */}
			<h2 className="  flex justify-center bg-lime-400 pt-1 pb-1">
				Span Right Edge
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute right-0 inset-y-0 w-16 bg-yellow-300"></div>
			</div>
			{/*Span bottom edge */}
			<h2 className="  flex justify-center bg-cyan-400 pt-1 pb-1">
				Span Bottom Edge
			</h2>
			<div className="relative h-32 w-32 bg-yellow-100">
				<div className="absolute bottom-0 h-16 inset-x-0 bg-yellow-300"></div>
			</div>
			{/*Display Classes */}
			<h2 className="  flex justify-center bg-pink-400 pt-1 pb-1">
				Display Classes
			</h2>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
				accusamus expedita
				<div className="inline font-bold"> This is inline</div>
				bintanka hajans quod ducimus laborum fuga id officia animi recusandae
				reprehenderit saepe
				<div className="inline-block font-semibold">This is dancer </div>
				repudiandae <span className="block">Lorem ipsum dolor sit amet.</span>
				nostrum perferendis eligendi, inventore neque esse suscipit eum aliquam?
				Praesentium<div className="block">What is the name</div>
				repellendus totam neque libero expedita natus laborum ab, culpa nisi
				animi provident ipsam
				<span className="inline-block">display: inline-block</span>
				<div className="hidden"> Hidden text no show yaya</div> odio non minima
				facilis quas voluptatibus laudantium iste ad velit consequuntur
				voluptatem enim delectus exercitationem!
			</div>
			{/*Z-Index */}
			<h2 className="  flex justify-center bg-green-600 pt-1 pb-1">
				Z-Inidex (3D) - How close and far from screen used for doing overlapping
				and bring-to-front, bring-to-back
			</h2>
			<div className="relative h-36 text-center">
				<div className="absolute left-10 w-24 h-24 bg-blue-200 z-40 ">1</div>
				<div className="absolute left-20 w-24 h-24 bg-blue-300 z-auto">2</div>
				<div className="absolute left-40 w-24 h-24 bg-blue-400 z-10">3</div>
				<div className="absolute left-60 w-24 h-24 bg-blue-500 z-20">4</div>
				<div className="absolute left-80 w-24 h-24 bg-blue-600 z-50">5</div>
			</div>
			{/*Floats */}
			<h2 className="  flex justify-center bg-stone-200 pt-1 pb-1">Floats</h2>

			<div className="w-1/2">
				<Image
					className="float-right w-40 h-40 m-3"
					src={require('./img/img1.jpg')}
					alt="img1"
				/>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
					architecto quae provident perspiciatis praesentium. Ut nemo quaerat
					perspiciatis quidem tenetur?
				</p>
			</div>
			<div className="w-auto">
				<Image
					className="float-left w-40 h-40 m-3"
					src={require('./img/img1.jpg')}
					alt="img1"
				/>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
					architecto quae provident perspiciatis praesentium. Ut nemo quaerat
					perspiciatis quidem tenetur?
				</p>
			</div>
			<div className="w-1/2"></div>
		</main>
	)
}
