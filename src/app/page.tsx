import Image from "next/image";
import Button from "../components/ui/Button";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Image1 from "@/public/bento/bento-1.jpg";
import Image2 from "@/public/bento/bento-2.jpg";
import Image3 from "@/public/bento/bento-3.jpg";
import Image4 from "@/public/bento/bento-4.jpg";
import Image5 from "@/public/bento/bento-5.jpg";
import Image6 from "@/public/bento/bento-6.jpg";
import RamenSVG from "@/public/bento/ramen.svg";
import { Testimonials } from "@/components/layout/Testimonials";
import Footer from "@/components/layout/Footer";
import Features from "@/components/layout/Features";
import Header from "@/components/layout/Header";
import Team from "@/components/layout/Team";
import Contact from "@/components/layout/Contact";
import Products from "@/components/layout/Products";

export default function Home() {
  return (
    <main className="bg-light-ivory">
      <Header />
      <Hero />
      <div className="relative w-full h-20 -mt-20 rounded-tl-full rounded-br-full bg-light-ivory"></div>
      <About />
      <Features />

      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-neutral-900"
          d="M 0 26.309788586479087 L 15.625 33.8861791753622 L 31.25 31.400109687884793 L 46.875 21.766548142139985 L 62.5 24.940156508255654 L 78.125 24.041128160116134 L 93.75 12.092819018100107 L 109.375 13.566596588108336 L 125 14.39052714450198 L 140.625 15.411492564522788 L 156.25 7.870255443018362 L 171.875 10.329602177769072 L 187.5 16.81608980333887 L 203.125 17.525914967173996 L 218.75 22.74439468475201 L 234.375 18.802387013358405 L 250 22.52123380218852 L 265.625 22.337356113264097 L 281.25 22.596105426351148 L 296.875 30.367200386768552 L 312.5 28.62902509006462 L 328.125 32.16902446162638 L 343.75 29.34218468457288 L 359.375 29.60335177980695 L 375 33.57027786125884 L 390.625 27.53930804003856 L 406.25 30.47902674960271 L 421.875 33.72165190817722 L 437.5 38.713069730197944 L 453.125 46.965296696348474 L 468.75 48.43238641617393 L 484.375 55.52528475131946 L 500 49.993043951836746 L 515.625 46.189432284196634 L 531.25 51.80472929112748 L 546.875 56.91825081320899 L 562.5 57.561504219714806 L 578.125 60.23450003293887 L 593.75 49.85573497549004 L 609.375 48.17758902487671 L 625 45.70035247164108 L 640.625 38.07157025234921 L 656.25 42.64281206045294 L 671.875 45.98179304171105 L 687.5 49.2012091704689 L 703.125 47.70318491554985 L 718.75 55.33028114474087 L 734.375 51.89087938106564 L 750 51.14195861451486 L 765.625 51.86890124648992 L 781.25 47.56658481087074 L 796.875 45.06059184824753 L 812.5 40.48249484275267 L 828.125 48.23658564358192 L 843.75 49.77736772248796 L 859.375 48.92217487008805 L 875 49.43917165412942 L 890.625 59.827220589458115 L 906.25 58.53375255737936 L 921.875 52.99433274722439 L 937.5 52.63313974065586 L 953.125 55.241845553146476 L 968.75 56.3741810596347 L 984.375 63.131623557809256 L 1000 57.86762249034172 L 1000 100 L 0 100 Z"
        ></path>
      </svg>
      <section className="py-section bg-neutral-900">
        <div className="container mx-auto">
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
            </div>
          </div>
        </div>
      </section>
      <Products />
      <section className="py-section bg-neutral-100">
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
      <Contact />
      <Footer />
    </main>
  );
}
