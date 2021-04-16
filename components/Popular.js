import React from "react";

export default function Popular({title}) {
  return (
    <section className="max-w-7xl container mx-auto px-8 py-4 sm:px-28">
      <h3 className="text-3xl font-extrabold text-gray-900 py-7">
       {title}
      </h3>
      <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-y-8 lg:gap-x-8">
        <a href="/">
        <article className="flex flex-col sm:p-o">
          <img
            className="w-96 bg-cover bg-center object-cover rounded-lg shadow-lg"
            src="/falcon.jpg"
            alt="Falcon"
            loading="lazy"
            quality={40}
          />
          <div className="flex flex-col space-y-1">
            <p className="text-cool-500 text-sm tracking-wide pt-4">Jan 18,2021</p>
            <h2 className="text-2xl font-bold tracking-tight text-cool-800">
              The Falcon and the Winter Soldier
            </h2>
            <p className="text-cool-600 text-sm leading-relaxed">
              The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on the Marvel Comics characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.
            </p>
            <div>
              <button className="hidden px-6 py-3 rounded-md left-0 text-cool-100 text-sm font-semibold bg-cool-900 hover:bg-cool-800 focus:outline-none">
                Read More.
              </button>
            </div>
          </div>
        </article>
        </a>
        <a href="/">
        <article className="flex flex-col">
          <img
            className="h-48 w-96 bg-cover bg-center object-cover rounded-lg shadow-lg"
            src="/windows.jpg"
            alt="Windows"
            loading="lazy"
            quality={40}
          />
          <div className="flex flex-col space-y-1">
            <p className="text-cool-500 text-sm tracking-wide pt-4">Jan 18,2021</p>
            <h2 className="text-2xl font-bold tracking-tight">
              The Falcon and the Winter Soldier
            </h2>
            <p className="text-cool-600 text-sm leading-relaxed">
              The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on the Marvel Comics characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.
            </p>
            <div>
              <button className="hidden px-6 py-3 rounded-md left-0 text-cool-100 text-sm font-semibold bg-cool-900 hover:bg-cool-800 focus:outline-none">
                Read More.
              </button>
            </div>
          </div>
        </article>
        </a>
        <a href="/">
        <article className="flex flex-col">
          <img
            className="h-48 w-96 bg-cover bg-center object-cover rounded-lg shadow-lg"
            src="/keyboard.jpg"
            alt="Keyboard"
            loading="lazy"
            quality={40}
          />
          <div className="flex flex-col space-y-1">
            <p className="text-cool-500 text-sm tracking-wide pt-4">Jan 18,2021</p>
            <h2 className="text-2xl font-bold tracking-tight">
              The Falcon and the Winter Soldier
            </h2>
            <p className="text-cool-600 text-sm leading-relaxed">
              The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on the Marvel Comics characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.
            </p>
            <div>
              <button className="hidden px-6 py-3 rounded-md left-0 text-cool-100 text-sm font-semibold bg-cool-900 hover:bg-cool-800 focus:outline-none">
                Read More.
              </button>
            </div>
          </div>
        </article>
        </a>
      </div>
    </section>
  );
}
