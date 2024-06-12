"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="border-gray-200 bg-gray-900 sm:bg-opacity-100 md:bg-opacity-70 md:backdrop-blur-md fixed top-0 w-full transition-all scroll-smooth"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e28b51042b02984ba36f037ad494dc7f/devdynamics.jpg"
            className="h-8"
            alt="DevDynamics Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DevDynamics
          </span>
        </a>
        <button
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto scroll-smooth transition-all ease-in-out opacity-animate-this-div `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 scroll-smooth transition-all ease-in-out">
            <li>
              <Link
                href="/authors"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 sm:my-1 ${
                  pathname.includes("authors")
                    ? "md:text-purple-300 md:border-b-4 md:border-purple-300 md:rounded sm:text-indigo-800 font-bold bg-[#8888ff]"
                    : "text-white"
                }`}
              >
                Authors
              </Link>
            </li>
            {/* <li>
              <Link
                href="/statistics"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 sm:my-1 ${
                  pathname.includes("statistics")
                    ? "md:text-purple-300 md:border-b-4 md:border-purple-300 md:rounded sm:text-indigo-800 font-bold bg-[#8888ff]"
                    : "text-white"
                }`}
              >
                Statistics
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
