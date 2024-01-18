import Image from "next/image";
import Image1 from "@/public/bento/bento-1.jpg";
import Image2 from "@/public/bento/bento-2.jpg";
import Image3 from "@/public/bento/bento-3.jpg";
import Image4 from "@/public/bento/bento-4.jpg";
import Image5 from "@/public/bento/bento-5.jpg";
import Image6 from "@/public/bento/bento-6.jpg";

export default function AboutExtended() {
  return (
    <>
      <section id="AboutExtended" className="bg-light-ivory py-section">
        <div className="container container--xs">
          <div className="grid gap-4 lg:grid-cols-2">
            <Image
              className="self-end w-full h-fit justify-self-end rounded-custom--lg"
              width={384}
              height={256}
              src={Image6}
              loading="lazy"
              alt=""
            />

            <div className="p-16 bg-white rounded-custom--lg">
              <h2 className="mb-4 text-3xl font-brush text-neutral-900">
                Our
                <br />
                History
              </h2>
              <div className="space-y-4 text-neutral-600 ">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum modi tempora temporibus at distinctio iusto aliquid
                  vitae et quam deleniti accusamus illo nobis, eum dolore?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum repudiandae odit similique vel repellendus eius
                  incidunt in itaque quaerat. At quod laudantium alias,
                  reiciendis ex itaque. Dicta sapiente vel asperiores. Impedit
                  esse cumque sapiente repellat quo magnam autem nam voluptates.
                </p>
              </div>
            </div>

            <div className="p-16 bg-white rounded-custom--lg">
              <h2 className="mb-4 text-3xl font-brush text-neutral-900">
                About us
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum modi tempora temporibus at distinctio iusto aliquid
                  vitae et quam deleniti accusamus illo nobis, eum dolore?
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, qui. Voluptatem obcaecati cumque aperiam dolore.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, eaque!
                </p>
              </div>
            </div>
            <Image
              className="self-start w-full h-fit justify-self-start rounded-custom--lg"
              width={384}
              height={256}
              src={Image2}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
