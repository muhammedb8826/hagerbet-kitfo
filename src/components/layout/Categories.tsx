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
import useMenuTabsStore from "../../../stores/useMenuTabsStore";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const { setTab } = useMenuTabsStore();

  return (
    <section
      id="Categories"
      className={clsx("bg-neutral-100", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimated className="container container--sm">
        <div className="grid gap-6 bento">
          <CategoryTile
            tabId={1}
            title={"Ramen"}
            imgSrc={Image1}
            width={384}
            height={384}
          />
          <CategoryTile
            tabId={3}
            span={2}
            title={"Onigiri"}
            imgSrc={OnigiriImg}
            width={384}
            height={682}
          />
          <CategoryTile
            tabId={0}
            title={"Sushi"}
            imgSrc={Image6}
            width={384}
            height={256}
          />
          <CategoryTile
            tabId={2}
            title={"Mochi"}
            imgSrc={MochiImg}
            width={384}
            height={256}
          />
          <div className="relative w-full h-full bg-primary-500 text-neutral-100">
            <div className="flex flex-col justify-center h-full gap-2 px-16 text-2xl font-medium">
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(0)}>Sushi</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(1)}>Ramen</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(2)}>Mochi</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(3)}>Onigiri</span>
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
