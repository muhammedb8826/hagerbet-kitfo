import Image from "next/image";
import React from "react";
import CardTestimonial from "../modules/CardTestimonial";

const testimonials = [
  {
    id: 0,
    name: "Anna Kowalska",
    avatarUrl:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    content:
      "It was an exquisite experience. The flavors were authentic and rich, truly capturing the essence of Asian cuisine. The staff was attentive and the ambiance, perfect. I can't wait to return",
  },
  {
    id: 1,
    name: "Adam Kowalski",
    avatarUrl:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    content:
      "The cuisine was absolutely authentic, bursting with rich flavors. The attentive staff and cozy ambiance just added to the remarkable dining experience. Eagerly looking forward to my next visit!",
  },
  {
    id: 2,
    name: "Marcin Nowak",
    avatarUrl:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    content:
      "It was an exquisite experience. The flavors were authentic and rich, truly capturing the essence of Asian cuisine. The staff was attentive and the ambiance, perfect. I can't wait to return",
  },
];

export const Testimonials = () => {
  return (
    <section id="Testimonials" className="bg-light-ivory py-section">
      <div className="container container--sm">
        <h2 className="mb-8 text-2xl font-semibold text-center capitalize lg:mb-12 text-neutral-800 lg:text-3xl">
          explore our
          <br /> awesome <span className="text-primary-500">Components</span>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map(({ id, content, name, avatarUrl }) => {
            return (
              <CardTestimonial
                key={id}
                content={content}
                name={name}
                avatarUrl={avatarUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
