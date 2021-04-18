import React from "react";
import Head from "next/head";
import Header from "../../components/dashboard/Header";

export default function index() {
  return (
    <div className="flex flex-col items-center top-0 min-h-screen">
      <Head>
        <title>B FOR BLOG | BHIMRAJ YADAV</title>
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
      <Header/>
    </div>
  );
}
