import React, { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((v) => !v);
  };
  return (
    <header className="max-w-7xl container mx-auto px-8 sm:px-20">
      <div className="flex flex-row justify-between items-center">
        <a href="/" alt="B-FOR-BLOG">
          <img className="h-8 w-auto" src="logo.svg" alt="B-FOR-BLOG" />
        </a>
        <nav className="hidden sm:block">
          <ul className="flex flex-row space-x-4 transition-all duration-500">
            <li className="uppercase font-poppins font-medium text-cool-600  hover:text-cool-800 border-b-2 border-transparent hover:border-cyan-500">
              <a href="/" alt="Home">
                Home
              </a>
            </li>
            <li className="uppercase font-poppins font-medium text-cool-600  hover:text-cool-800 border-b-2 border-transparent hover:border-cyan-500">
              <a href="/" alt="Blog">
                Blog
              </a>
            </li>

            <li className="uppercase font-poppins font-medium text-cool-600  hover:text-cool-800 border-b-2 border-transparent hover:border-cyan-500">
              <a href="/" alt="About">
                About
              </a>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleClick}
          type="button"
          className="sm:hidden rounded-md p-2 inline-flex items-center justify-center text-cool-400 hover:text-cool-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
          aria-expanded="false"
        >
          <span className="sr-only hidden">Open main menu</span>
          <svg
            className="w-6 h-6 text-cool-600 focus:outline-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          menu ? `block` : `hidden`
        } absolute z-50 top-0 inset-x-0 p-2 transition ease-in-out delay-500 transform origin-top-right sm:hidden`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden flex flex-col">
          <div className="px-5 pt-4 flex items-center justify-between">
            <img className="h-8 w-auto" src="icon-logo.png" alt=" B-FOR-BLOG" />

            <button
              onClick={handleClick}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only hidden">Close main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Blog
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
