import React from "react";
export default function Hero() {
  return (
    <section className="max-w-7xl container mx-auto px-8 py-4 sm:px-28 h-screen">
      <h1 className="text-7xl font-bold left-0 py-8">The Blog</h1>
      <article className="flex flex-col md:flex-row md:space-x-6">
        <img
          className="bg-cover object-contain rounded-lg w-1/2 h-auto"
          src="/hero.jpg"
          alt="Hero"
          loading="eager"
          quality={40}
        />
        <div className="flex flex-col space-y-4">
          <p className="text-cool-500">Jan 18,2021</p>
          <h2 className=" font-bold text-4xl ">
            New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 512GB
            SSD) - Silver (Latest Model)
          </h2>
          <p className="text-gray-600">
            Apple announced its Arm-based M1 silicon for Mac during the “One
            More Thing” event back in November last year. With it, it also
            announced the new M1-powered MacBook Air and Pro. Now, they are
            finally available in Nepal.
          </p>
        </div>
      </article>
    </section>
  );
}
