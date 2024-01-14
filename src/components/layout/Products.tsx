import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <section className="bg-neutral-900 py-section">
      <div className="container container--sm">
        <div className="mx-auto">
          <h2 className="text-2xl font-semibold text-center capitalize text-neutral-200 lg:text-3xl ">
            Latest Work
          </h2>

          <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-neutral-700">
            <button className="h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 text-primary-600 border-primary-500 sm:text-base whitespace-nowrap focus:outline-none">
              Animation
            </button>

            <button className="h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 text-neutral-100 sm:text-base whitespace-nowrap cursor-base focus:outline-none border-neutral-700 hover:border-neutral-400">
              Web design
            </button>

            <button className="h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 text-neutral-100 sm:text-base whitespace-nowrap cursor-base focus:outline-none border-neutral-700 hover:border-neutral-400">
              App design
            </button>

            <button className="h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 text-neutral-100 sm:text-base whitespace-nowrap cursor-base focus:outline-none border-neutral-700 hover:border-neutral-400">
              Branding
            </button>
          </div>

          <section className="mt-8 space-y-8 lg:mt-12">
            <section className="lg:flex lg:items-center">
              <div className="lg:w-1/2 ">
                <p className="text-lg tracking-wider uppercase text-primary-500 ">
                  Ui kit
                </p>
                <h2 className="mt-2 text-2xl font-semibold capitalize text-neutral-200 ">
                  Block of Ui kit collections
                </h2>
              </div>

              <div className="mt-4 lg:w-1/2 lg:mt-0">
                <Image
                  className="object-cover w-full h-64 rounded-lg md:h-96"
                  width={764}
                  height={955}
                  src={
                    "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  }
                  loading="lazy"
                  alt=""
                />
              </div>
            </section>

            <section className="lg:flex lg:items-center">
              <div className="lg:w-1/2 ">
                <p className="text-lg tracking-wider uppercase text-primary-500 ">
                  Wareframe
                </p>
                <h2 className="mt-2 text-2xl font-semibold capitalize text-neutral-200 ">
                  Best free website layout{" "}
                </h2>
              </div>

              <div className="mt-4 lg:w-1/2 lg:mt-0">
                <Image
                  className="object-cover w-full h-64 rounded-lg md:h-96"
                  width={764}
                  height={955}
                  src={
                    "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  }
                  loading="lazy"
                  alt=""
                />
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
