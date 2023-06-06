export default function Circ() {
  return (
    <section>
      {/** ------------------------------------------------------------------------------*/}
      {/** ------------------------------------------------------------------------------*/}
      {/** ------------------------------------------------------------------------------*/}
      <h1 className="text-2xl text-center bg-green-500">
        Circle 1{" "}
        <code className="bg-yellow-300 text-black tracking-widest">
          Spinning
        </code>{" "}
      </h1>
      <div className="flex flex-col p-3 items-center justify-center  bg-slate-900">
        <svg
          className="w-48 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      {/** ------------------------------------------------------------------------------*/}
      {/** ------------------------------------------------------------------------------*/}
      {/** ------------------------------------------------------------------------------*/}

      <h1 className="text-2xl text-center bg-red-500">
        Circle 2{" "}
        <code className="bg-yellow-300 text-black tracking-widest">Pulse</code>
      </h1>
      <div className="flex flex-col p-3 items-center justify-center  bg-slate-900">
        <svg
          className="w-48 animate-pulse text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      {/** ------------------------------------------------------------------------------*/}
      {/** ------------------------------------------------------------------------------*/}
      {/** ------------------------------------------------------------------------------*/}

      <h1 className="text-2xl text-center bg-teal-500">
        Circle 3
        <code className="bg-yellow-300 text-black tracking-widest">Ping</code>
      </h1>
      <div className="flex flex-col p-3 items-center justify-center  bg-slate-900">
        <svg
          className="w-48 animate-ping text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="2"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
