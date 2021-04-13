import React from "react";
import Head from "next/head";
import Image from "next/image";
export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row">
        <div className="bg-[#036672] min-h-screen sm:w-4/12 md:w-3/12 lg:w-2/12">
          <aside className="h-screen sticky top-0">
            <div className=" border-b-[1px] p-3 border-teal-200 border-opacity-50">
              <a href="/" title="Dashboard" className="flex flex-row space-x-2">
                <svg
                  className="text-teal-400 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 35 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z" />
                  <path d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z" />
                </svg>
                <p className="hidden sm:block font-semibold text-teal-50 font-poppins">
                  easywire
                </p>
              </a>
            </div>
            <div className="mx-2 my-1">
              <nav className="pb-4 pt-2">
                <ul>
                  <li className="items-center bg-gray-800 bg-opacity-40 p-2 rounded-full sm:rounded-md">
                    <a
                      href="/"
                      title="Home"
                      className="flex flex-row space-x-2"
                    >
                      <svg
                        className="text-teal-400 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <p className="hidden sm:block font-normal text-teal-50 text-sm">
                        Home
                      </p>
                    </a>
                  </li>
                  <li className="items-center p-2 rounded-md">
                    <a
                      href="/"
                      title="History"
                      className="flex flex-row space-x-2"
                    >
                      <svg
                        className="text-teal-400 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="hidden sm:block font-normal text-teal-50 text-sm">
                        History
                      </p>
                    </a>
                  </li>
                  <li className="items-center p-2 rounded-md">
                    <a
                      href="/"
                      title="Balances"
                      className="flex flex-row space-x-2"
                    >
                      <svg
                        className="text-teal-400 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                      <p className="hidden sm:block font-normal text-teal-50 text-sm">
                        Balances
                      </p>
                    </a>
                  </li>
                  <li className="items-center p-2 rounded-md">
                    <a
                      href="/"
                      title="Cards"
                      className="flex flex-row space-x-2"
                    >
                      <svg
                        className="text-teal-400 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      <p className="hidden sm:block font-normal text-teal-50 text-sm">
                        Cards
                      </p>
                    </a>
                  </li>
                  <li className="items-center p-2 rounded-md">
                    <a
                      href="/"
                      title="Reports"
                      className="flex flex-row space-x-2"
                    >
                      <svg
                        className="text-teal-400 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="hidden sm:block font-normal text-teal-50 text-sm">
                        Reports
                      </p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="border-t-[1px] border-gray-400 border-opacity-30 pt-6">
              <ul className="px-2 pb-1">
                <li className="items-center  p-2 rounded-md">
                  <a
                    href="/"
                    title="Settings"
                    className="flex flex-row space-x-2"
                  >
                    <svg
                      className="text-teal-400 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="hidden sm:block font-normal text-teal-50 text-sm">
                      Settings
                    </p>
                  </a>
                </li>
                <li className="items-center  p-2 rounded-md">
                  <a href="/" title="Help" className="flex flex-row space-x-2">
                    <svg
                      className="text-teal-400 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="hidden sm:block font-normal text-teal-50 text-sm">
                      Help
                    </p>
                  </a>
                </li>
                <li className="items-center  p-2 rounded-md">
                  <a
                    href="/"
                    title="Privacy"
                    className="flex flex-row space-x-2"
                  >
                    <svg
                      className="text-teal-400 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <p className="hidden sm:block font-normal text-teal-50 text-sm">
                      Privacy
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="bg-[#F4F7F9] min-h-screen w-full">
          <header className="bg-white shadow">
            <div className="px-8 md:px-16 py-2 ">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    className="text-sm px-2 focus:outline-none"
                    placeholder="Search transactions"
                  />
                </div>
                <div className="p-1 flex flex-row space-x-2 justify-center items-center">
                  <svg
                    class="w-4 h-4 text-gray-500 mr-4 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                  <Image
                    className="rounded-full bg-center bg-auto"
                    src="/author.jpeg"
                    alt="Picture of the author"
                    width={20}
                    height={20}
                    objectFit="cover"
                    loading="eager"
                  />
                  <p className="text-sm font-medium">
                    John <span className="hidden sm:block">Doe</span>
                  </p>
                  <svg
                    class="w-4 h-4 text-gray-500 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-8 md:px-16">
              <div className="flex flex-col lg:flex-row border-t-[1px] py-4 justify-start md:justify-between">
                <div className="flex flex-row space-x-3 justify-start lg:justify-center">
                  <div className="p-1">
                    <Image
                      className="rounded-full bg-center bg-auto"
                      src="/author.jpeg"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      objectFit="cover"
                      loading="eager"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <p className="text-xl font-bold">
                      Good morning, Emilia Birch
                    </p>

                    <div className="flex flex-row space-x-6">
                      <div className="flex flex-row space-x-2 items-center">
                        <svg
                          className="w-3 h-3 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <p className="text-xs text-gray-500 font-semibold">
                          Duke Street Studio
                        </p>
                      </div>

                      <div className="flex flex-row space-x-2 items-baseline">
                        <svg
                          className="w-3 h-3 bg-teal-500 rounded-full text-white p-[2px]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs text-gray-500 font-semibold">
                          Verified Account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-3 pt-4 lg:p-4">
                  <button className="text-sm border border-opacity-90  rounded-md text-gray-800 px-3 py-1 focus:outline-none">
                    Add money
                  </button>
                  <button className="text-sm  bg-[#036672] rounded-md text-white px-3 py-1 focus:outline-none">
                    Send money
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main className=" min-h-screen w-full px-8 md:px-16">
            <section className="pt-8">
              <p className="font-medium">Overview</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-2 mr-10 sm:mr-0">
                <div className="bg-white rounded-md shadow flex flex-col ">
                  <div className="flex flex-row px-4 md:px-8  py-4 space-x-4 items-center">
                    <svg
                      className="w-6 h-6 text-cool-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-cool-500 sm:text-sm">
                        Account Balance
                      </p>
                      <p className="text-xl font-semibold">$30,659.56</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 w-full px-6 md:px-8 py-2">
                    <p className="text-teal-500 text-sm font-medium">
                      View All
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-md shadow flex flex-col ">
                  <div className="flex flex-row px-4 md:px-8  py-4 space-x-4 items-center">
                    <svg
                      className="w-6 h-6 text-cool-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-cool-500 sm:text-sm">
                        Pending
                      </p>
                      <p className="text-xl font-semibold">$30,659.56</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 w-full px-6 md:px-8 py-2">
                    <p className="text-teal-500 text-sm font-medium">
                      View All
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-md shadow flex flex-col ">
                  <div className="flex flex-row px-4 md:px-8 md:pr-18 py-4 space-x-4 items-center">
                    <svg
                      className="w-6 h-6 text-cool-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-cool-500 sm:text-sm">
                        Processed
                      </p>
                      <p className="text-xl font-semibold">$30,659.56</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 w-full px-6 md:px-8 py-2">
                    <p className="text-teal-500 text-sm font-medium">
                      View All
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <p className="font-medium">Recent Activity</p>
              <div className="bg-white shadow rounded-lg mt-2 overflow-auto">
                <table className="w-full leading-normal text-left">
                  <thead>
                    <tr className="bg-bluegray-100 border-b-[1px] border-cool-200">
                      <th className="px-5 py-3 text-left text-xs font-semibold text-bluegray-500 uppercase tracking-wider">
                        Transaction
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-semibold text-bluegray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-semibold text-bluegray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-semibold text-bluegray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-cool-200 bg-white font-medium">
                      <td className="px-5 py-3 text-left text-xs text-cool-500 flex flex-row items-center">
                        <svg
                          className="w-5 h-5 opacity-70 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Payment from Molly Sanders
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        $20,000 <span className="text-cool-500">USD</span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        <span className="text-green-700 bg-green-200 px-2 py-1 rounded-full">
                          Succeess
                        </span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs text-cool-500">
                        May 5,2020
                      </td>
                    </tr>
                    <tr className="border-b border-cool-200 bg-white font-medium">
                      <td className="px-5 py-3 text-left text-xs text-cool-500 flex flex-row items-center">
                        <svg
                          className="w-5 h-5 mr-2 opacity-70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                        Payment to Doug mann
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        $19,500 <span className="text-cool-500">USD</span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        <span className="text-yellow-800 bg-yellow-200 px-2 py-1 rounded-full">
                          Processing
                        </span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs text-cool-500">
                        April 28,2020
                      </td>
                    </tr>
                    <tr className="border-b border-cool-200 bg-white font-medium">
                      <td className="px-5 py-3 text-left text-xs text-cool-500 flex flex-row items-center">
                        <svg
                          className="w-5 h-5 mr-2 opacity-70"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Payment to Erica Frost
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        $8,750 <span className="text-cool-500">USD</span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        <span className="text-green-700 bg-green-200 px-2 py-1 rounded-full">
                          Succeess
                        </span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs text-cool-500">
                        April 9,2020
                      </td>
                    </tr>
                    <tr className="border-b border-cool-200 bg-white font-medium">
                      <td className="px-5 py-3 text-left text-xs text-cool-500 flex flex-row items-center">
                        <svg
                          className="w-4 h-4 mr-3 opacity-70 text-white bg-cool-500 rounded-full"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Added from account **** 5555
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        $300 <span className="text-cool-500">USD</span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        <span className="text-cool-700 bg-cool-200 px-2 py-1 rounded-full">
                          Failed
                        </span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs text-cool-500">
                        April 9,2020
                      </td>
                    </tr>
                    <tr className="border-b border-cool-200 bg-white font-medium">
                      <td className="px-5 py-3 text-left text-xs text-cool-500 flex flex-row items-center">
                        <svg
                          className="w-5 h-5 mr-2 opacity-70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                        Payment to Doug mann
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        $19,500 <span className="text-cool-500">USD</span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        <span className="text-yellow-800 bg-yellow-200 px-2 py-1 rounded-full">
                          Processing
                        </span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs text-cool-500">
                        March 28,2020
                      </td>
                    </tr>
                    <tr className="border-b border-cool-200 bg-white font-medium">
                      <td className="px-5 py-3 text-left text-xs text-cool-500 flex flex-row items-center">
                        <svg
                          className="w-5 h-5 mr-2 opacity-70"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Payment to Erica Frost
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        $8,750 <span className="text-cool-500">USD</span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        <span className="text-green-700 bg-green-200 px-2 py-1 rounded-full">
                          Succeess
                        </span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs text-cool-500">
                        March 9,2020
                      </td>
                    </tr>
                    <tr className="border-b border-cool-200 bg-white font-medium">
                      <td className="px-5 py-3 text-left text-xs text-cool-500 flex flex-row items-center">
                        <svg
                          className="w-4 h-4 mr-3 opacity-70 text-white bg-cool-500 rounded-full"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Added from account **** 5555
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        $300 <span className="text-cool-500">USD</span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs">
                        <span className="text-cool-700 bg-cool-200 px-2 py-1 rounded-full">
                          Failed
                        </span>
                      </td>
                      <td className="px-5 py-3 text-left text-xs text-cool-500">
                        March 9,2020
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
          <footer className="sticky bottom-0 bg-white p-2 px-8 md:px-16  shadow justify-between flex flex-row">
            <p className=" text-sm text-cool-600">© 2021 Bhimraj Yadav</p>
            <p className=" text-sm text-cool-600 hidden sm:block">
              Terms of service
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
