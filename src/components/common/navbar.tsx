"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarData from "@/data/navBarData";

const Navbar = () => {
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" passHref>
          <span className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <Image src="/logo.svg" width={50} height={50} alt="Website Logo" />
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbarData.map((item) => (
              <li key={item.id}>
                {item.dropdown ? (
                  <div className="relative">
                    <span
                      onClick={() =>
                        setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
                      }
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      {item.title}
                    </span>
                    {isProjectsDropdownOpen && (
                      <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.title}>
                            <Link href={subItem.path} passHref>
                              <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer dark:text-gray-200 dark:hover:bg-gray-700">
                                {subItem.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.path} passHref>
                    <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      {item.title}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
