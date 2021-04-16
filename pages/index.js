import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center top-0 min-h-screen">
      <Head>
        <title>B FOR BLOG | BHIMRAJ YADAV</title>
        <meta name="title" content="B FOR BLOG | The Blogging Website | b-for-blog.com" />
        <meta
          name="description"
          content="B FOR BLOG | The Blogging Website | b-for-blog.com"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://b-for-blog.vercel.app"
        />
        <meta
          property="og:title"
          content="B FOR BLOG | The Blogging Website | b-for-blog.com"
        />
        <meta
          property="og:description"
          content="B FOR BLOG | The Blogging Website | b-for-blog.com"
        />
        <meta
          property="og:image"
          content="https://b-for-blog.vercel.app/bforblog.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://b-for-blog.vercel.app"
        />
        <meta
          property="twitter:title"
          content="B FOR BLOG | The Blogging Website | b-for-blog.com"
        />
        <meta
          property="twitter:description"
          content="B FOR BLOG | The Blogging Website | b-for-blog.com"
        />
        <meta
          property="twitter:image"
          content="https://b-for-blog.vercel.app/bforblog.png"
        />

        <link rel="canonical" href="https://b-for-blog.vercel.app" />
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
      <div className="w-full py-5 border-b">
        <Header />
      </div>

      <main className="w-full flex flex-col">
        <Hero />
        <Popular title=" Most Popular" />
        <Popular title=" Latest" />
      </main>

 <div className="w-full mt-4 sm:mt-8">
      <Footer/>
      </div>
    </div>
  );
}
