"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarData from "@/data/navBarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkTheme(darkThemeMediaQuery.matches);

    const handleDarkThemeChange = (event: MediaQueryListEvent) => {
      setIsDarkTheme(event.matches);
    };

    darkThemeMediaQuery.addEventListener("change", handleDarkThemeChange);

    return () => {
      darkThemeMediaQuery.removeEventListener("change", handleDarkThemeChange);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" passHref>
          <span className="flex items-center">
            <Image
              src={isDarkTheme ? "/Logo-w.svg" : "/Logo.svg"}
              width={100}
              height={100}
              alt="Website Logo"
            />
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {navbarData.map((item) => (
              <li key={item.id} className="mt-3 md:mt-0">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
                      }
                      className="text-gray-700 hover:bg-gray-50 rounded-md px-3 py-2"
                    >
                      {item.title}
                    </button>
                    {isProjectsDropdownOpen && (
                      <ul className="absolute z-10 left-0 w-48 py-1 mt-1 bg-white shadow-lg border border-gray-100">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.title}>
                            <Link href={subItem.path} passHref>
                              <span className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
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
                    <span className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md">
                      {item.title}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            {/* Icônes de réseaux sociaux */}
            <li className="mt-3 md:mt-0 flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/maximilienthiry/"
                target="_blank"
                rel="noopener noreferrer"
                className="halo-effect"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/zeitounmax"
                target="_blank"
                rel="noopener noreferrer"
                className="halo-effect"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://gitlab.com/zeitounmax"
                target="_blank"
                rel="noopener noreferrer"
                className="halo-effect"
              >
                <FontAwesomeIcon icon={faGitlab} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
