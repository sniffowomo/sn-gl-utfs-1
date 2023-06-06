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
      <p className="tracking-widest text-center text-2xl font-extrabold text-transparent italic bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">
        Actual Work start here
      </p>
      </div>

    </main>
  );
}
