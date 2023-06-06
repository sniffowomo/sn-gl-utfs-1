import Script from "next/script";

export default function Tog() {
  return (
    <section>
      <Script src="./togfunc.js" />

      <div className="relative inline-block w-10 ml-6 mt-6 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
    </section>
  );
}
