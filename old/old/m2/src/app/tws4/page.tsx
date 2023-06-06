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
			<h1 className="flex text-lg justify-center font-semibold bg-yellow-400 pt-2 pb-2">
				Excercise 4
			</h1>
			<p className="flex justify-center divide-x-8 divide-zinc-800 bg-slate-200 ">
				🤔Typography - Font name is Kanit from google TW also its own set of
				fonts, note some of the colors are set like this
			</p>

			{/** Font Family code*/}

			<h2 className="flex text-lg justify-center font-semibold bg-blue-400 pt-2 pb-2">
				Font Family
			</h2>

			<div className="font-sans"> Font-sans</div>
			<div className="font-serif"> Font-serif this isnt</div>
			<div className="font-mono"> Font-mono</div>

			{/** Font Sizes*/}

			<h2 className="flex text-lg justify-center font-semibold bg-green-400 pt-2 pb-2">
				Font Size
			</h2>

			<div className="text-xs">text-xs: extra small</div>
			<div className="text-sm">text-sm: extra small</div>
			<div className="text-base">text-base: extra small</div>
			<div className="text-lg">text-lg: extra small</div>
			<div className="text-xl">text-xl: extra small</div>
			<div className="text-2xl">text-2xl: extra small goes up to 9xl</div>
			<div className="text-7xl">text-7xl: extra small goes up to 9xl</div>

			{/** Font Weight*/}

			<h2 className="flex text-lg justify-center font-semibold bg-orange-400 pt-2 pb-2">
				Font Weight
			</h2>

			<div className="font-extralight">Font-ExtraLight</div>
			<div className="font-light">Font-Light</div>
			<div className="font-normal">Font-Normal</div>
			<div className="font-medium">Font-Medium</div>
			<div className="font-semibold">Font-Semibold</div>
			<div className="font-bold">Font-bold</div>
			<div className="font-extrabold">Font-extrabold</div>

			{/** Font Spacing*/}
			<h2 className="flex text-lg justify-center font-semibold bg-violet-400 pt-2 pb-2">
				Letter Spacing
			</h2>
			<p className="border border-spacing-2 pb-3 text-center tracking-widest">
				Note these seem to be quite subtle , and will need to have learge fonts
				to actuall see whats going on
			</p>

			<div className="tracking-tighter">Tracking Tighter</div>
			<div className="tracking-tight">Tracking Tight</div>
			<div className="tracking-normal">Tracking Normal</div>
			<div className="tracking-wide">Tracking wide</div>
			<div className="tracking-wider">Tracking wider</div>
			<div className="tracking-widest">Tracking widest</div>

			{/** Font Alignment*/}
			<h2 className="flex text-lg justify-center font-semibold bg-teal-400 pt-2 pb-2">
				Text Alignment
			</h2>

			<div className="text-left"> Text Left Aligned</div>
			<div className="text-center"> Text Center Aligned</div>
			<div className="text-right"> Text Left Aligned</div>
			<div className="text-justify"> Text justify</div>

			{/** Font Decoration*/}
			<h2 className="flex text-lg justify-center font-semibold bg-pink-400 pt-2 pb-2">
				Text Decoration
			</h2>

			<div className="underline underline-offset-5 decoration-red-950 decoration-4">
				Underlined Text - decoration-4 - This controls the underline thickness
			</div>
			<div className="underline text-lg decoration-double">
				Double udnerline
			</div>
			<div className="underline text-lg decoration-dotted"> Double dotted </div>
			<div className="underline text-lg decoration-dashed">
				Double underline
			</div>
			<div className="underline text-lg decoration-wavy decoration-4">
				Double wavy
			</div>

			{/** Decoration Style*/}
			<h2 className="flex text-lg justify-center font-semibold bg-[#C38370] pt-2 pb-2">
				Decoration Style
			</h2>

			{/** Decoration Offset*/}
			<h2 className="flex text-lg justify-center font-semibold bg-rose-400 pt-2 pb-2">
				Decoration Offset
			</h2>

			<div className="underline text-lg decoration-double underline-offset-2">
				Double underline with an offset, this goes upto 8 which looks funny
			</div>

			{/** Text Transformation*/}
			<h2 className="flex text-lg justify-center font-semibold bg-[#B6E5D8] pt-2 pb-2">
				Text Transformation
			</h2>

			<div className="p normal-case">This is normal-case</div>
			<div className="p uppercase">This is Upper-case</div>
			<div className="p lowercase">This is Lower-case</div>
			<div className="p capitalize">This is Capitalize-case</div>
		</main>
	)
}
