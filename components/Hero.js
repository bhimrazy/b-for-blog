import React from "react";
export default function Hero() {
  return (
    <section className="max-w-7xl container mx-auto px-8 py-4 sm:px-28">
      <h1 className="text-5xl sm:text-7xl font-bold left-0 py-8">The Blog</h1>
      <article className="flex flex-col md:flex-row md:space-x-6">
        <img
          className="bg-cover object-cover object-center rounded-lg w-96 sm:w-3/5 lg:w-1/2 h-auto shadow"
          src="/hero.jpg"
          alt="Hero"
          loading="eager"
          quality={40}
        />
        <div className="flex flex-col space-y-4">
          <p className="text-cool-500 tracking-wide text-sm pt-4 md:pt-0 ">Jan 18,2021</p>
          <h2 className="text-2xl sm:text-5.5xl font-extrabold tracking-tight">
            New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 512GB
            SSD) - Silver (Latest Model)
          </h2>
          <p className="text-cool-600 leading-relaxed text-sm">
            Apple announced its Arm-based M1 silicon for Mac during the “One
            More Thing” event back in November last year. With it, it also
            announced the new M1-powered MacBook Air and Pro. Now, they are
            finally available in Nepal.
          </p>
          <div>
            <button className="px-6 py-3 rounded-md left-0 text-cool-100 text-sm font-semibold bg-cool-900 hover:bg-cool-800 focus:outline-none">
              Read More.
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
