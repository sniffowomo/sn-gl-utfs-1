/**
 * This page is going to be all the work for the tailwind sandbox
 */
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'

export default function Tws() {
	return (
		<main>
			<h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold">
				Excercise 10 - Interactivity
			</h1>
			<p className="m-1 flex justify-center divide-x-8 divide-zinc-800 bg-slate-200">
				Adding various interactivity stuff - th is an important section
			</p>

			{/*Hover State Styling */}
			<h2 className="  flex justify-center bg-green-300 pb-2 pt-2 text-lg font-extrabold">
				Hover State Styling
			</h2>

			<button className="m-3 rounded-lg bg-black px-5 py-3 text-white hover:rounded-3xl hover:bg-orange-500 hover:text-white">
				Submit
			</button>

			{/*Focus State Styling */}
			<h2 className="  flex justify-center bg-blue-300 pb-2 pt-2 text-lg font-extrabold">
				Focus State Styling
			</h2>

			<button className="m-3 rounded-lg bg-black px-5 py-3 text-white focus:rounded-3xl focus:bg-teal-500 focus:text-white">
				Submit
			</button>

			{/*Active State Styling */}
			<h2 className="  flex justify-center bg-teal-300 pb-2 pt-2 text-lg font-extrabold">
				Active State Styling
			</h2>

			<button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:rounded-3xl active:bg-green-500 active:text-white">
				Submit
			</button>

			{/*Styling based on parent state */}
			<h2 className="flex justify-center bg-pink-300 pb-2 pt-2 text-lg font-extrabold">
				Styling based on parent state
			</h2>

			<a
				href=""
				className="rounder-lg group m-4  mx-auto block max-w-xs space-y-3 bg-white p-6 text-center shadow-lg hover:bg-blue-300"
			>
				<h3 className="group-hover:text-white"> Card Title </h3>
				<p className="group-hover:text-red-200"> This is card shizz </p>
			</a>

			{/*Pseudo Classes */}
			<h2 className="  flex justify-center bg-stone-300 pb-2 pt-2 text-lg font-extrabold">
				Pseudo Classes
			</h2>

			<ul className="m-2 text-center">
				<li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
					item-1
					<button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:rounded-3xl active:bg-green-500 active:text-white">
						ITEM1-CLICK
					</button>
				</li>
				<li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
					item-2
					<button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:rounded-3xl active:bg-green-500 active:text-white">
						ITEM1-CLICK
					</button>
				</li>
				<li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
					item-3
					<button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:rounded-3xl active:bg-green-500 active:text-white">
						ITEM1-CLICK
					</button>
				</li>
				<li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
					item-4
					<button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:rounded-3xl active:bg-green-500 active:text-white">
						ITEM1-CLICK
					</button>
				</li>
				<li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
					item-5
					<button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:rounded-3xl active:bg-green-500 active:text-white">
						ITEM1-CLICK
					</button>
				</li>
				<li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
					item-6
					<button className="m-3 rounded-lg bg-black px-5 py-3 text-white active:rounded-3xl active:bg-green-500 active:text-white">
						ITEM1-CLICK
					</button>
				</li>
			</ul>

			{/*Appearance */}
			{/*Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components. */}
			<h2 className="  flex justify-center bg-rose-300 pb-2 pt-2 text-lg font-extrabold">
				Appearance - Use appearance-none to reset any browser specific styling
				on an element. This utility is often used when creating custom form
				components.
			</h2>

			<select className="appearance-none">
				<option value="yes">Yes 👃</option>
				<option value="no">No</option>
			</select>

			{/*Cursor */}
			<h2 className="  flex justify-center bg-zinc-300 pb-2 pt-2 text-lg font-extrabold">
				Cursor
			</h2>

			<button className="m-3 cursor-wait rounded-lg bg-black px-5 py-3 text-white hover:bg-rose-500 hover:px-10">
				Boobs
			</button>

			<button className="m-3 cursor-not-allowed rounded-lg bg-black px-5 py-3 text-white hover:bg-rose-500 hover:px-10">
				NotAllowed
			</button>

			<p className="cursor-pointer">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, fuga.
			</p>

			{/*Resize */}
			<h2 className="flex justify-center bg-fuchsia-300 pb-2 pt-2 text-lg font-extrabold">
				Resize
			</h2>

			{/*User Select */}
			<h2 className="  flex justify-center bg-green-500 pb-2 pt-2 text-lg font-extrabold">
				User Select
			</h2>

			<p className="cursor-text select-auto capitalize">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima
			</p>

			<p className="cursor-text select-none capitalize">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima
			</p>
			<p className="cursor-text select-all capitalize">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima
			</p>

			{/*Smooth Scroll Example */}
			<h2 className="  flex justify-center bg-slate-500 pb-2 pt-2 text-lg font-extrabold">
				Smooth Scroll Example
			</h2>

			<div className="scroll-smooth">
				<a href="#item" className="my-6 block scroll-smooth">
					Go To item
				</a>
				<p className="m-4 block p-4 text-center shadow-lg shadow-rose-400 hover:bg-pink-400 hover:shadow-green-700">
					Smooth-Scroll cant be demonstrated here because the component has to
					be converted into client component
				</p>
				<p className="bg-rose-100 text-center hover:text-red-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus
					voluptatum minus a doloribus animi labore ut cupiditate aut ipsam quo
					sapiente excepturi repellat ipsa repellendus veritatis, soluta quod!
					Dolor est aspernatur at repellendus minus, iusto enim excepturi labore
					quam accusamus omnis. Quas beatae nisi rem natus odit eligendi?
					Voluptates obcaecati asperiores rem? Vero, accusamus perferendis id
					sapiente porro placeat distinctio totam eveniet excepturi libero
					obcaecati, dolore repellat dolorem ducimus autem cumque consectetur
					iste tempora sunt ut, voluptates ipsa sed facere? Quia aliquid, sequi
					culpa cum porro laboriosam quis. In modi, repudiandae sequi beatae
					quisquam numquam. Minus debitis nostrum nesciunt corporis, similique
					nobis quia animi officia beatae quae saepe, modi dolorum quam dolores
					illum culpa repellat voluptatum sapiente. A magnam rerum esse, quasi
					aspernatur molestias nostrum itaque, officiis distinctio nesciunt
					fugiat deserunt non! Aliquid dolorum eveniet, tenetur quaerat commodi
					sapiente laborum, odio id temporibus, repudiandae repellendus. Quas
					inventore, vitae reprehenderit porro numquam totam id consectetur
					sapiente neque enim, dolor commodi laboriosam! Expedita pariatur
					aliquam animi eaque. Molestias pariatur nemo mollitia laboriosam quo
					quibusdam rem aspernatur suscipit officia illo, quia dolorem ipsam
					quos ducimus, quaerat dicta aperiam adipisci reprehenderit in ipsum
					quasi tenetur? Dolorem expedita quo autem ullam velit distinctio
					mollitia laborum perferendis harum sed. Ad quis, pariatur nemo
					ratione, vitae perspiciatis at excepturi dolore animi voluptatum
					placeat, repellat saepe dolorem praesentium eveniet sit laudantium
					voluptatem aperiam tempore cum adipisci nulla distinctio! Debitis a
					fuga illo, nisi aspernatur placeat corrupti, atque eveniet dolores
					odio deserunt ducimus dolor voluptates voluptatibus blanditiis
					voluptas quibusdam neque, impedit est. Modi sapiente esse perferendis
					ea labore praesentium quidem. Repellat sunt similique pariatur
					reiciendis at dolores aspernatur maxime quaerat, harum ab
					exercitationem ipsa eos iste placeat illo, aut sint quo deleniti rerum
					obcaecati quia assumenda adipisci magni autem! Fuga sit delectus
					tempora vitae voluptatum perspiciatis laborum sunt id, voluptas unde
					libero, quas enim voluptatibus odit exercitationem quasi. Sit optio
					odio minima sed pariatur, repudiandae velit, a earum, molestiae eos
					odit. Quasi laudantium maxime sit totam consequatur, praesentium
					exercitationem, dolore eum necessitatibus accusantium distinctio autem
					sapiente quo harum perspiciatis vero earum officiis similique quidem
					quis ex nihil! Aspernatur, magnam cumque ipsa dolorem a id perferendis
					neque sunt aperiam recusandae? Rerum illo numquam, velit recusandae
					expedita quod non veritatis saepe ducimus voluptates praesentium
					voluptas nisi dolorem iste aspernatur suscipit omnis. Eligendi,
					tempore nemo. Soluta quod dignissimos sint optio perspiciatis hic
					voluptate adipisci porro, repellendus labore voluptatem maxime,
					laboriosam necessitatibus?
				</p>
				<div id="item">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					natus, odio non deleniti vel praesentium amet reprehenderit veritatis
					fugiat exercitationem quaerat eveniet voluptatem accusamus magnam
					consequatur, quas recusandae asperiores! Ipsam eveniet harum corrupti,
					suscipit animi voluptatibus dolores velit laboriosam? Dolorem, vero
					tempore! Illum necessitatibus fugiat itaque obcaecati provident quia
					numquam.
				</div>
			</div>
		</main>
	)
}
