import React from "react";
import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import Overview from "../../components/dashboard/Overview";
import Activity from "../../components/dashboard/Activity";

export default function index() {
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Head>
        <title>
          Dashboard |The Blogging Website| B FOR BLOG | BHIMRAJ YADAV
        </title>
        <meta
          name="title"
          content=" Dashboard |The Blogging Website| B FOR BLOG | BHIMRAJ YADAV"
        />
        <meta
          name="description"
          content=" Dashboard |The Blogging Website| B FOR BLOG | BHIMRAJ YADAV"
        />
        <meta
          property="og:url"
          content="https://b-for-blog.vercel.app/dashboard"
        />
        <meta
          property="og:title"
          content=" Dashboard |The Blogging Website| B FOR BLOG | BHIMRAJ YADAV"
        />
        <meta
          property="og:description"
          content=" Dashboard |The Blogging Website| B FOR BLOG | BHIMRAJ YADAV"
        />
        <meta
          property="og:image"
          content="https://b-for-blog.vercel.app/dashboard.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://b-for-blog.vercel.app/dashboard"
        />
        <meta
          property="twitter:title"
          content=" Dashboard |The Blogging Website| B FOR BLOG | BHIMRAJ YADAV"
        />
        <meta
          property="twitter:description"
          content=" Dashboard |The Blogging Website| B FOR BLOG | BHIMRAJ YADAV"
        />
        <meta
          property="twitter:image"
          content="https://b-for-blog.vercel.app/dashboard.png"
        />

        <link rel="canonical" href="https://b-for-blog.vercel.app/dashboard" />
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
      <Layout title="Dashboard">
        <main className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 w-full">
          <Overview />
          <Activity />
        </main>
      </Layout>
    </div>
  );
}
