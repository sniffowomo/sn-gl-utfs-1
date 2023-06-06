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
				Excercise 9 - tws9
			</h1>
			<p className="flex justify-center divide-x-8 divide-zinc-800 bg-slate-200 m-1">
				Filters
			</p>
			{/*Blur */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-green-400 pt-2 pb-2">
				Blur
			</h2>
			<div className="blur-sm">Blurrign text</div>
			<div className="blur">Blurrign text</div>
			<Image
				className="w-40 h-40 m-3 blur mx-auto"
				src={require('./img/img1.jpg')}
				alt="img1"
				priority={true}
			/>
			{/*Brightness */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-blue-400 pt-2 pb-2">
				Brightness
			</h2>

			<Image
				className="w-40 h-40 m-3 mx-auto brightness-100"
				src={require('./img/img2.jpg')}
				alt="img1"
				priority={true}
			/>

			<Image
				className="w-40 h-40 m-3 mx-auto brightness-50"
				src={require('./img/img2.jpg')}
				alt="img1"
				priority={true}
			/>
			<Image
				className="w-40 h-40 m-3 mx-auto brightness-200"
				src={require('./img/img2.jpg')}
				alt="img1"
				priority={true}
			/>

			{/*Contrast */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-green-400 pt-2 pb-2">
				Contrast
			</h2>

			<Image
				className="w-40 h-40 m-3 mx-auto contrast-0"
				src={require('./img/img2.jpg')}
				alt="img1"
				priority={true}
			/>
			<Image
				className="w-40 h-40 m-3 mx-auto contrast-50"
				src={require('./img/img3.jpg')}
				alt="img1"
				priority={true}
			/>
			<Image
				className="w-40 h-40 m-3 mx-auto contrast-200"
				src={require('./img/img3.jpg')}
				alt="img1"
				priority={true}
			/>

			{/*Grayscale */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-stone-400 pt-2 pb-2">
				Grayscale
			</h2>

			<Image
				className="w-40 h-40 m-3 mx-auto grayscale-0"
				src={require('./img/img4.jpg')}
				alt="img1"
				priority={true}
			/>
			<Image
				className="w-40 h-40 m-3 mx-auto grayscale"
				src={require('./img/img4.jpg')}
				alt="img1"
				priority={true}
			/>

			{/*Invert */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-teal-400 pt-2 pb-2">
				Invert
			</h2>

			<Image
				className="w-40 h-40 m-3 mx-auto invert"
				src={require('./img/img4.jpg')}
				alt="img1"
				priority={true}
			/>

			{/*Sepia */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-rose-400 pt-2 pb-2">
				Sepia
			</h2>

			<Image
				className="w-40 h-40 m-3 mx-auto sepia"
				src={require('./img/img4.jpg')}
				alt="img1"
				priority={true}
			/>

			{/*Hue Rotate */}
			<h2 className="  flex text-lg justify-center font-extrabold bg-stone-400 pt-2 pb-2">
				Rotate
			</h2>

			<Image
				className="w-40 h-40 m-3 mx-auto hue-rotate-15"
				src={require('./img/img5.jpg')}
				alt="img1"
				priority={true}
			/>
			<Image
				className="w-40 h-40 m-3 mx-auto hue-rotate-60"
				src={require('./img/img5.jpg')}
				alt="img1"
				priority={true}
			/>
			<Image
				className="w-40 h-40 m-3 mx-auto hue-rotate-90"
				src={require('./img/img5.jpg')}
				alt="img1"
				priority={true}
			/>
		</main>
	)
}
