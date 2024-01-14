import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav x-data="{ isOpen: false }" className="relative shadow bg-neutral-900">
      <div className="container">
        <div className="py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center text-2xl font-semibold text-neutral-100"
            >
              Logo
            </Link>
            <div className="flex lg:hidden">
              <button
                x-cloak
                type="button"
                className="text-neutral-200 hover:text-neutral-400 focus:outline-none focus:text-neutral-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            x-cloak
            className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-neutral-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-2 transition-colors duration-300 transform text-neutral-200 hover:text-primary-500 md:mx-4 md:my-0"
                href="/"
              >
                Home
              </Link>
              <Link
                className="my-2 transition-colors duration-300 transform text-neutral-200 hover:text-primary-500 md:mx-4 md:my-0"
                href="/menu"
              >
                Menu
              </Link>
              <Link
                className="my-2 transition-colors duration-300 transform text-neutral-700 dark:text-neutral-200 hover:text-primary-500 dark:hover:text-primary-400 md:mx-4 md:my-0"
                href="/about"
              >
                About
              </Link>
              <Link
                className="my-2 transition-colors duration-300 transform text-neutral-200 hover:text-primary-500 md:mx-4 md:my-0"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
