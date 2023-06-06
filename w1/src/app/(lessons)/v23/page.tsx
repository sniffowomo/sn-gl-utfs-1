/**
 * This page is going to be all the work for the tailwind sandbox
 */

import Showi from "../components/shb";
import Image from "next/image";
import Circ from "./components/csvg";

export default function Tws() {
  return (
    <main>
      <Showi />
      <h1 className="  flex justify-center bg-teal-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
        EX24: DarkMode
      </h1>
      <p className="m-1 flex justify-center divide-x-8 divide-zinc-200 bg-slate-200 italic">
        Transforms and Transitions
      </p>
      {/**-------------------------------------------------- */}
      {/**-------------------------------------------------- */}
      {/**-------------------------------------------------- */}
      {/**-------------------------------------------------- */}`
      <h1 className="  flex justify-center bg-blue-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
        EX24: DarkMode
      </h1>
      <div className="bg-zinc-200">
        <p className="tracking-widest text-center text-2xl font-extrabold hover:text-transparent duration-150 italic bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">
          Actual Work start here
        </p>
      </div>
      <div className="container max-auto mt-10 bg-white dark:bg-slate-900 rounder-xl px-6 py-8 shadow xl">
        <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit.
        </h3>
      </div>
    </main>
  );
}
