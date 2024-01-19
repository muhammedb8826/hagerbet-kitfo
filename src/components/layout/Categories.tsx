"use client";
import Image from "next/image";
import Image1 from "@/public/bento/bento-1.jpg";
import Image2 from "@/public/bento/bento-2.jpg";
import Image3 from "@/public/bento/bento-3.jpg";
import Image6 from "@/public/bento/bento-6.jpg";
import OnigiriImg from "@/public/bento/onigiri.avif";
import MochiImg from "@/public/bento/mochi.jpg";
import RamenSVG from "@/public/bento/ramen.svg";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";
import ScrollAnimated from "./ScrollAnimated";
import { motion } from "framer-motion";
import CategoryTile from "../ui/CategoryTile";
import Link from "next/link";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const notesMotion = {
    rest: { opacity: 0, ease: "linear", duration: 0.15, type: "tween", y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        type: "tween",
        ease: "linear",
      },
    },
  };

  return (
    <section
      id="Categories"
      className={clsx("bg-neutral-100", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimated className="container container--sm">
        <div className="grid gap-6 bento">
          <CategoryTile
            href="/menu"
            title={"Ramen"}
            imgSrc={Image1}
            width={384}
            height={384}
          />
          <CategoryTile
            href="/menu"
            span={2}
            title={"Onigiri"}
            imgSrc={OnigiriImg}
            width={384}
            height={682}
          />
          <CategoryTile
            href="/menu"
            title={"Sushi"}
            imgSrc={Image6}
            width={384}
            height={256}
          />
          <CategoryTile
            href="/menu"
            title={"Mochi"}
            imgSrc={MochiImg}
            width={384}
            height={256}
          />
          <div className="relative w-full h-full bg-primary-500 text-neutral-100">
            <div className="flex flex-col justify-center h-full gap-2 px-16 text-2xl font-medium">
              <Link href={"/menu"} className="hover:underline w-fit">
                <p>Sushi</p>
              </Link>
              <Link href={"/menu"} className="hover:underline w-fit">
                <p>Ramen</p>
              </Link>
              <Link href={"/menu"} className="hover:underline w-fit">
                <p>Mochi</p>
              </Link>
              <Link href={"/menu"} className="hover:underline w-fit">
                <p>Onigiri</p>
              </Link>
            </div>
            <Image
              className="w-[250px] h-[250px] absolute right-12 bottom-0"
              width={250}
              height={250}
              src={RamenSVG}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </ScrollAnimated>
    </section>
  );
}
