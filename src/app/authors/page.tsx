// page.tsx from [author] directory

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import data from "@/data/sample-data.json"; // Adjust the path as necessary

const Authors = () => {
  const router = useRouter();
  const authors = data.data.AuthorWorklog.rows;

  const handleClickAuthor = (authorName: String) => {
    // Use the router to navigate to the dynamic route for the author
    router.push(`/authors/${authorName}`);
  };

  return (
    <center>
      <h1 className=" font-sans text-2xl bg-gradient-to-r from-indigo-600 to-black text-transparent bg-clip-text font-bold mt-2 inline-block">
        Authors List
      </h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="my-10 font-sans text-xl ">
            {/* Pass the author's name to the click handler */}
            <button
              onClick={() => handleClickAuthor(author.name)}
              className="text-white py-5 px-10 rounded-3xl w-[350px] md:w-96 overflow-scroll shadow-2xl active:scale-105 transition-all font-semibold mt-2 bg-slate-900 "
            >
              {author.name}
            </button>
          </li>
        ))}
      </ul>
    </center>
  );
};

export default Authors;
