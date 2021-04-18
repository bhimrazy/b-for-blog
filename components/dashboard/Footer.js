import React from "react";

export default function Footer() {
  return (
    <div className="w-full shadow">
      <footer className="max-w-7xl container mx-auto px-8 sm:px-14 lg:px-20 py-4 sticky bottom-0  justify-between items-center flex flex-row">
        <p className=" text-sm text-cool-600">© 2021 Bhimraj Yadav</p>
        <p className=" text-sm text-cool-600 hidden sm:block">
          Terms of service
        </p>
      </footer>
    </div>
  );
}
