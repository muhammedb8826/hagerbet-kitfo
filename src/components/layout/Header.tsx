"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoSVG from "../svg/LogoSVG";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "Menu", path: "/menu" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="Header"
      className={clsx(
        "z-40 w-full transition",
        isHomepage && (isScrolled ? "bg-neutral-900" : "bg-neutral-900/60"),
        isHomepage ? "fixed top-0" : "sticky top-0 bg-neutral-900"
      )}
    >
      <div className="container">
        <div className="py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-2xl font-semibold text-neutral-100"
            >
              <LogoSVG width={50} height={50} />
              <span className="flex gap-1">
                <span className="text-white font-brush">Asian</span>
                <span className="text-primary-500 font-brush">Food</span>
              </span>
            </Link>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-neutral-200 hover:text-neutral-400 focus:outline-none focus:text-neutral-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-neutral-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col gap-8 md:flex-row md:mx-6">
              {links.map(({ id, title, path }) => {
                return (
                  <Link
                    key={id}
                    className={clsx(
                      "relative my-2 transition-colors duration-300 transform  md:mx-4 md:my-0",
                      pathname == path
                        ? "text-primary-400"
                        : "text-neutral-200 hover:text-primary-400"
                    )}
                    href={path}
                  >
                    {title}
                    {pathname == path && (
                      <div className="absolute w-5 h-[3px] -translate-x-1/2 rounded-custom -bottom-2 left-1/2 bg-primary-400"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
