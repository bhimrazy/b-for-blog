import React from "react";

export default function Overview() {
  return (
    <section className="py-6">
      <div className="flex flex-row  pb-4 text-cool-600 font-medium justify-between items-baseline">
        <p className=" text-lg">Overview</p>
        <small className="text-sm sm:text-normal">
          As of April 18,2021 6:00 PM GMT
        </small>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg bg-bluegray-700">
        <div className="flex flex-col border-b sm:border-b sm:border-r lg:border-b-0 lg:border-r border-cool-500">
          <div className="flex flex-row px-4 md:px-8  py-6 space-x-4 items-center">
            <svg
              className="w-8 h-8 text-cool-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <div className="flex flex-row space-x-16 md:space-x-10 justify-between items-center">
                <p className="text-sm font-normal  text-cool-400 uppercase">
                  All-Time Views
                </p>
                <div className="flex flex-row space-x-1">
                  <p className="text-cool-300 text-sm pt-2"> 15%</p>
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-semibold text-cool-200">565,949</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b sm:border-b lg:border-b-0 lg:border-r border-cool-500">
          <div className="flex flex-row px-4 md:px-8  py-6 space-x-4 items-center">
            <svg
              className="w-8 h-8 text-cool-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <div>
              <div className="flex flex-row space-x-16 md:space-x-10 justify-between items-center">
                <p className="text-sm font-normal  text-cool-400 uppercase">
                  All-Time Likes
                </p>
                <svg
                  className="w-8 h-8 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-3xl font-semibold text-cool-200">258,459</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row px-4 md:px-8  py-6 space-x-4 items-center ">
            <svg
              className="w-8 h-8 text-cool-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <div className="flex flex-row space-x-16 md:space-x-10 justify-between items-center">
                <p className="text-sm font-normal  text-cool-400 uppercase">
                  Newsletter
                </p>
                <svg
                  className="w-8 h-8 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-3xl font-semibold text-cool-200">101,610</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
