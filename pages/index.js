import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center top-0 min-h-screen">
      <Head>
        <title>B FOR BLOG | BHIMRAJ YADAV</title>
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

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
