import React from "react";
import Button from "@/components/ui/Button";
import bg from "@/public/hero-bg.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen mb-20 bg-right bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url(${bg.src})`,
      }}
    >
      <div className="container w-full h-full mx-auto">
        <div className="grid w-full h-full grid-cols-2 mx-auto">
          <div className="flex flex-col self-center max-w-xl">
            <h1 className="mb-4 text-5xl font-semibold text-neutral-200">
              Lorem ipsum dolor
              <br />
              <span className="text-primary-500">Sit amet</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, excepturi hic delectus sint officiis sunt.
            </p>
            <div className="flex flex-row gap-8 mt-8">
              <Button variant="primary">Primary</Button>
              <Button variant="outlined">Secondary</Button>
            </div>
            <div className="absolute flex flex-row items-center gap-8 left-20 bottom-20">
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Twitter</Link>
              <div className="w-80 h-[1px] bg-neutral-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
