import Image from "next/image";
import Image1 from "@/public/about/about-1.jpg";
import Image2 from "@/public/about/about-2.jpg";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <>
      <section className="bg-light-ivory py-section">
        <div className="container container--sm">
            <div className="items-center gap-16 lg:grid lg:grid-cols-2">
              <div className="font-light text-neutral-800 sm:text-lg">
                <p className="mb-2 text-xl font-semibold text-neutral-900">
                  About us
                </p>
                <h2 className="mb-4 text-4xl font-bold text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="mb-4 text-lg font-bold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                  nisi est sed.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
                  voluptatibus quidem temporibus tempore ea, voluptas expedita cum
                  laboriosam reprehenderit nihil, commodi ipsa qui non. Itaque
                  cumque necessitatibus repudiandae vero pariatur?
                </p>
                <Button variant="primary" icon="play" className="mt-4">
                    Learn more
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="w-full rounded-lg">
                  <Image className="rounded-custom" width={284} height={394} src={Image1} alt="" />
                </div>
                <div className="w-full mt-4 rounded-lg lg:mt-10">
                  <Image className="rounded-custom" width={284} height={394} src={Image2} alt="" />
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
