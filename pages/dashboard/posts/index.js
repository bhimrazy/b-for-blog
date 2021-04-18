import React from "react";
import Head from "next/head";
import Layout from "../../../components/dashboard/Layout";
import Overview from "../../../components/dashboard/Overview";

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
        <main className="max-w-7xl container justify-center items-center mx-auto px-8 sm:px-14 lg:px-20 w-full h-1/2 py-20 ">
          <div className="flex justify-center items-center bg-cool-50 shadow-sm rounded-lg py-28">
            <button className="px-8 py-4 border-dashed border-2 border-cool-300 rounded-xl bg-cool-100 hover:bg-cool-200 hover:bg-opacity-80 transition duration-200 focus:outline-none  font-medium text-cool-600">
              Add a new Post
            </button>
          </div>
        </main>
      </Layout>
    </div>
  );
}
