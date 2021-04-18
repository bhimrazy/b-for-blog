import React from "react";
import Table from "./Table";

export default function Activity() {
  return (
    <section className="py-6">
      <div className="flex flex-row flex-wrap  pb-4 text-cool-600 font-medium items-center sm:space-x-3">
        <p className=" text-sm transition ease-out duration-300  bg-cool-200 hover:bg-cool-600 rounded-full px-3 py-1 cursor-pointer hover:text-cool-300">
          Activity
        </p>
        <p className=" text-sm transition ease-out duration-300 hover:bg-cool-600 rounded-full px-3 py-1 cursor-pointer hover:text-cool-300">
          Performance
        </p>
        <p className=" text-sm transition ease-out duration-300 hover:bg-cool-600 rounded-full px-3 py-1 cursor-pointer hover:text-cool-300">
          Comments
        </p>
        <p className=" text-sm transition ease-out duration-300 hover:bg-cool-600 rounded-full px-3 py-1 cursor-pointer hover:text-cool-300">
          Backup
        </p>
      </div>
      <Table />
    </section>
  );
}
