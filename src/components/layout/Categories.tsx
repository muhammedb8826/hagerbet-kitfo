import Image from "next/image";
import Image1 from "@/public/bento/bento-1.jpg";
import Image2 from "@/public/bento/bento-2.jpg";
import Image3 from "@/public/bento/bento-3.jpg";
import Image6 from "@/public/bento/bento-6.jpg";
import RamenSVG from "@/public/bento/ramen.svg";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="Categories"
      className={clsx("bg-neutral-100", paddingTop[pt], paddingBot[pb])}
    >
      <div className="container container--sm">
        <div className="grid gap-6 bento">
          <div className="col-span-1 row-span-1 text-neutral-600 bg-primary-500">
            <Image
              className="w-full h-full"
              width={384}
              height={384}
              src={Image1}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-2 bg-green-500 text-neutral-600">
            <Image
              className="w-full h-full"
              width={384}
              height={682}
              src={Image3}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="bg-blue-500 text-neutral-600">
            <Image
              className="w-full h-full"
              width={384}
              height={256}
              src={Image6}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full h-full">
            <Image
              className="w-full h-full"
              width={384}
              height={256}
              src={Image2}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="relative w-full h-full bg-primary-500 text-neutral-100">
            <div className="flex flex-col justify-center h-full gap-4 px-16 text-3xl font-medium">
              <p>Sushi</p>
              <p>Ramen</p>
              <p>Mochi</p>
              <p>Onigiri</p>
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
      </div>
    </section>
  );
}
