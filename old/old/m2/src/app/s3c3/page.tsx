/**
 * This page is going to be all the work for the tailwind sandbox
 */
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import ShoWi from './shb'

export default function Tws() {
	return (
		<main>
			<ShoWi />
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold">
				Excercise 12 - Columns
			</h1>
			<p className="m-1 flex justify-center divide-x-8 divide-zinc-800 bg-slate-200 italic">
				Text in columns
			</p>
			{/*Columns */}
			<h1 className="  flex justify-center bg-green-400 pb-2 pt-2 text-lg font-extrabold">
				Columns
			</h1>
			4 Columns
			<div className="columns-4 gap-1">
				<Image src={require('./img/img1.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img2.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img3.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img4.jpg')} alt="i2" priority={true} />
			</div>
			Two Columns
			<div className="columns-2 gap-1">
				<Image src={require('./img/img1.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img2.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img3.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img4.jpg')} alt="i2" priority={true} />
			</div>
			Responsive Columns
			<div className="columns-xs">
				<Image src={require('./img/img1.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img2.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img3.jpg')} alt="i2" priority={true} />
				<Image src={require('./img/img4.jpg')} alt="i2" priority={true} />
			</div>
			{/*Aspect - Ratio */}
			<h1 className="  flex justify-center bg-blue-400 pb-2 pt-2 text-lg font-extrabold">
				Aspect Ratio
			</h1>
			<div className="columns-4">
				<Image
					className="aspect-video"
					src={require('./img/img1.jpg')}
					alt="i2"
					priority={true}
				/>
				<Image
					className="aspect-square"
					src={require('./img/img2.jpg')}
					alt="i2"
					priority={true}
				/>
				<Image
					className=""
					src={require('./img/img3.jpg')}
					alt="i2"
					priority={true}
				/>
				<Image
					className=""
					src={require('./img/img4.jpg')}
					alt="i2"
					priority={true}
				/>
			</div>
			s
		</main>
	)
}
