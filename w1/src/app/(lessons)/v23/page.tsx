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
      <h1 className="  flex justify-center bg-fuchsia-400 pb-2 pt-2 text-lg font-extrabold p-5 ">
        EX21 - Tranform - This one in
      </h1>
      <p className="m-1 flex justify-center divide-x-8 divide-zinc-200 bg-slate-200 italic">
        Transforms and Transitions
      </p>
    </main>
  );
}
