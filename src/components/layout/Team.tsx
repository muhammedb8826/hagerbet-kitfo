import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <section className="bg-light-ivory py-section">
      <div className="container">
        <div>
          <h2 className="mb-8 text-2xl font-semibold text-center capitalize lg:mb-12 text-neutral-900 lg:text-3xl">
            Our Team
          </h2>
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
              <Image
                className="object-cover object-center w-full mx-auto rounded-lg"
                width={334}
                height={501}
                src={
                  "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                }
                loading="lazy"
                alt=""
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-neutral-900">
                  Ahmed Omer
                </h3>
                <span className="mt-1 text-neutral-500">CEO</span>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-neutral-900">
                  Jane Doe
                </h3>
                <span className="mt-1 text-neutral-500">Co-founder</span>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-neutral-900">
                  Steve Ben
                </h3>
                <span className="mt-1 text-neutral-500">UI/UX</span>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-neutral-900">
                  Patterson Johnson
                </h3>
                <span className="mt-1 text-neutral-500">Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
