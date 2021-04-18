import React, { useState, Fragment } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setMenu((v) => !v);
  };
  const handleDropdown = () => {
    setDropdown((v) => !v);
  };
  const navigation = ["Dashboard", "Posts", "Projects", "Calendar", "Reports"];
  return (
    <div className="w-full shadow">
      <header className="bg-cool-800">
        <div className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 hidden sm:block"
                src="icon.svg"
                alt="B-FOR-BLOG"
              />
              <img
                className="h-9 w-auto sm:hidden"
                src="footer-logo.svg"
                alt="B-FOR-BLOG"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-cool-900 text-white", Default: "text-cool-300 hover:bg-cool-700 hover:text-white" */}
                      <a
                        href="#"
                        className="bg-cool-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="text-cool-300 hover:bg-cool-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button className="bg-cool-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div className="ml-3 relative transition ease-in-out duration-500">
              <div>
                <button
                  onClick={handleDropdown}
                  className={`${
                    dropdown ? ` ` : `hidden`
                  } fixed inset-0 w-full h-full`}
                  tabindex="-1"
                ></button>
                <button
                  type="button"
                  className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={handleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <div
                className={`${
                  dropdown ? `block` : `hidden`
                } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 focus:outline-none bg-cool-50 hover:bg-cool-100"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 focus:outline-none hover:bg-cool-100"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>

                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 focus:outline-none hover:bg-cool-100"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl container mx-auto px-8 py-6 sm:px-20 justify-start">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
      {/* Sidebar */}
      <div className="relative sm:hidden">
        <div
          className={`${
            menu
              ? `transform translate-x-0 transition ease-in-out duration-200`
              : `transform -translate-x-full transition ease-in-out duration-200`
          } fixed top-0 left-0 h-full w-1/2 bg-cool-800  rounded-l-none rounded-lg shadow-xl z-10`}
        >
          <div className="flex flex-col">
            <div className="flex-shrink border-b border-cool-500 px-6 py-[13px]">
              <img
                className="h-9 w-auto sm:hidden"
                src="footer-logo.svg"
                alt="B-FOR-BLOG"
              />
            </div>
            <div className="sm:hidden">
              <div className="flex flex-col items-baseline space-y-4 px-6 py-2">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-cool-900 text-white", Default: "text-cool-300 hover:bg-cool-700 hover:text-white" */}
                      <a
                        href="#"
                        className="bg-cool-900 text-white px-6 py-2 rounded-md text-sm font-medium"
                      >
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="text-cool-300 hover:bg-cool-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className={`${menu ? ` ` : `hidden`} fixed inset-0 w-full h-full`}
          tabindex="-1"
        ></button>
        <button
          onClick={handleClick}
          className="fixed right-6 bottom-4 bg-cool-800 shadow p-4 rounded-full focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-cool-50 transition-all duration-500 ease-in-out transform scale-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={`${menu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}`}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
