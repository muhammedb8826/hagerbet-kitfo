import Image from "next/image";
import Image1 from "@/public/about/about-1.jpg";
import Image2 from "@/public/about/about-2.jpg";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";

export default function About() {
  return (
    <>
      <section id="About" className="bg-light-ivory py-section">
        <ScrollAnimated variant="left" className="container container--sm">
          <div className="items-center gap-16 lg:grid lg:grid-cols-2">
            <ScrollAnimated variant="right" className="font-light text-neutral-800 sm:text-lg">
              <h2 className="relative mb-4 text-4xl font-bold font-brush text-neutral-900">
                <span className="relative z-10">
                  About us
                </span>
                {/* <span className="absolute -left-2 -bottom-4 z-1">
                  <BrushSVG width={200} height={50} />
                </span> */}
              </h2>

              <p className="mb-2 text-lg font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt nisi est sed.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti voluptatibus quidem temporibus tempore ea, voluptas
                expedita cum laboriosam reprehenderit nihil, commodi ipsa qui
                non. Itaque cumque necessitatibus repudiandae vero pariatur?
              </p>
              <div className="flex flex-row gap-4 mt-6">
                <Link href="/about">
                  <Button variant="primary">Learn more</Button>
                </Link>
                <Link href="/about#staff">
                  <Button variant="outlined">Our Staff</Button>
                </Link>
              </div>
            </ScrollAnimated>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="w-full rounded-lg">
                <Image
                  className="rounded-custom"
                  width={284}
                  height={394}
                  src={Image1}
                  alt=""
                />
              </div>
              <div className="relative w-full mt-4 rounded-lg lg:mt-10">
                <Image
                  className="relative z-10 rounded-custom"
                  width={284}
                  height={394}
                  src={Image2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </section>
    </>
  );
}
