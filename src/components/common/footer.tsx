"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
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
    <footer
      className={`footer footer-center p-4 ${
        isDarkTheme
          ? "bg-base-900 text-base-100"
          : "bg-base-300 text-base-content"
      }`}
    >
      <div>
        <Link href="/">
          <span className="flex items-center cursor-pointer">
            <Image
              src={isDarkTheme ? "/footer-w.svg" : "/footer.svg"}
              width={100}
              height={100}
              alt="Website Logo"
            />
          </span>
        </Link>
        <p className="text-white">
          &copy; {new Date().getFullYear()} ZeitounCode. Tous droits réservés.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <Link href="/mentions">
              <span className="text-white hover:underline cursor-pointer">
                Mentions Légales
              </span>
            </Link>
          </li>
          <li>
            <Link href="/polconf">
              <span className="text-white hover:underline cursor-pointer">
                Politique de Confidentialité
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
