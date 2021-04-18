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
        <main className="w-full">
          <div className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 ">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </Layout>
    </div>
  );
}
