import React from "react";
import Head from "next/head";
import Layout from "../../../components/dashboard/Layout";

export default function index() {
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Head>
        <title>Posts | B FOR BLOG | BHIMRAJ YADAV</title>
        <meta
          name="title"
          content="B FOR BLOG | The Blogging Website | b-for-blog.com"
        />
        <meta
          name="description"
          content="B FOR BLOG | The Blogging Website | b-for-blog.com"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
      </Head>
      <Layout title="Posts">
        <main className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 w-full">
          <section className="pt-8  h-96">
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
                  <p className="text-teal-500 text-sm font-medium">View All</p>
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
                  <p className="text-teal-500 text-sm font-medium">View All</p>
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
                  <p className="text-teal-500 text-sm font-medium">View All</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
