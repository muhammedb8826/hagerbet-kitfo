"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import bg from "@/public/hero-bg.webp";
import Link from "next/link";
import LogoSVG from "../svg/LogoSVG";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import SocialLink from "../ui/SocialLink";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded, animationControls]);

  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section
      id="Hero"
      className="relative w-full h-screen bg-right bg-no-repeat bg-cover bg-neutral-900"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
      }}
    >
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-neutral-900"></div>
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Image
          className="absolute top-0 left-0 object-cover w-full transition z-1"
          src={bg}
          fill
          onLoad={() => setLoaded(true)}
          priority
          placeholder="blur"
          alt="Lorem ipsum dolor"
        />
      </motion.div>
      <div className="container z-10 w-full h-full mx-auto">
        <div className="grid w-full h-full grid-cols-2 mx-auto">
          <div className="z-10 flex flex-col self-center max-w-xl ">
            <LogoSVG width={150} height={150} />
            <h1 className="mb-4 text-5xl font-semibold font-brush text-neutral-200">
              Lorem ipsum dolor
              <br />
              <span className="text-primary-500">Sit amet</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, excepturi hic delectus sint officiis sunt.
            </p>
            <div className="flex flex-row gap-8 mt-8">
              <Link href="/menu#menu">
                <Button variant="primary">Explore menu</Button>
              </Link>
              {/* <Button variant="outlined">Secondary</Button> */}
            </div>
            <div className="absolute flex flex-row items-center gap-8 left-20 bottom-20">
              <SocialLink variant="facebook" url="https://facebook.com/" />
              <SocialLink variant="instagram" url="https://instagram.com/" />
              <SocialLink variant="twitter" url="https://twitter.com/" />
              <div className="w-80 h-[1px] bg-neutral-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
