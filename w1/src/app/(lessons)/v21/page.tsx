/**
 * This page is going to be all the work for the tailwind sandbox
 */

import Showi from "../components/shb"
import Image from "next/image"

export default function Tws() {
  return (
    <main>
      <Showi />
      <h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
        EX21 - Tranform - This one in
      </h1>
      <p className="m-1 flex justify-center divide-x-8 divide-zinc-200 bg-slate-200 italic">
        Transforms and Transitions
      </p>
      {/**============================Actual code below======================================= */}
      {/**============================Actual code below======================================= */}
      {/**============================Actual code below======================================= */}
      {/**============================Actual code below=====bvc ================================== */}
      {/*Transition */}
      <h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
        Transitions
      </h1>
      <div className="mx-auto flex justify-center">
        <button className="px-8 py-2 m-10 text-white bg-blue-500 rounded hover:bg-blue-200 hover:text-black">
          Click Me
        </button>
      </div>
      <div className="mx-auto flex justify-center">
        <button className="px-8 py-2 m-10 text-white bg-blue-500 transition rounded hover:opacity-20 hover:text-black duration-1000">
          Click Me Transition Opactiy
        </button>
      </div>
      <div className="mx-auto flex justify-center">
        <button className="px-8 py-2 m-10 text-white bg-blue-500 rounded hover:bg-blue-200 hover:text-black transition duration-1000">
          Click Me
        </button>
      </div>
      {/*Transition & Transform */}
      <h1 className="  flex justify-center bg-green-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
        Transition & Transform
      </h1>
      <div className="mx-auto flex justify-center">
        <button className="px-8 py-2 m-10 text-white bg-blue-500 rounded hover:bg-blue-200 hover:text-black hover:rotate-12 transition hover:cursor-help duration-1000">
          Transform
        </button>
      </div>
      Applying Above Transforms to the image below - This also has transforms and  transitions 
      have a look at the tailwindcss files for getting to know all
      <Image
        className="mx-auto hover:rotate-180 hover:scale-75 hover:skew-x-12 transition-transform duration-1000"
        src={require("../components/img/img1.jpg")}
        alt="img1"
        width={300}
      />
      {/*Transform & Transition */}
      <h1 className="  flex justify-center bg-stone-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
        Transform & Transition
      </h1>
    </main>
  )
}
