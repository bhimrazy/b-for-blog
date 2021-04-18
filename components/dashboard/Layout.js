import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
}
