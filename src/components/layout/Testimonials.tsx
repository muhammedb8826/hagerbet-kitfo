import Image from "next/image";
import React from "react";
import CardTestimonial from "../modules/CardTestimonial";

export const Testimonials = () => {
  return (
    <section id="Testimonials" className="bg-light-ivory py-section">
      <div className="container container--sm">
        <h2 className="mb-8 text-2xl font-semibold text-center capitalize lg:mb-12 text-neutral-800 lg:text-3xl">
          explore our
          <br /> awesome <span className="text-primary-500">Components</span>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <CardTestimonial />
          <CardTestimonial />
          <CardTestimonial />
        </div>
      </div>
    </section>
  );
};
