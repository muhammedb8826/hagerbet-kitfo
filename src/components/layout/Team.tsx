import Image from "next/image";
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: (TeamMember | undefined)[] = [
  {
    id: 0,
    name: "Ahmed Omer",
    role: "Executive Chef",
    imageUrl:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80",
  },
  {
    id: 1,
    name: "Jane Doe",
    role: "Head Chef",
    imageUrl:
      "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    id: 2,
    name: "Steve Ben",
    role: "Chef",
    imageUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
  },
  {
    id: 3,
    name: "Patterson Johnson",
    role: "Waitress",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  ,
  {
    id: 4,
    name: "Patterson Johnson",
    role: "Waiter",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  ,
  {
    id: 5,
    name: "Patterson Johnson",
    role: "Waiter",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
];

export default function Team() {
  return (
    <section id="Team" className="relative bg-light-ivory py-section">
      <div id="staff" className="absolute -top-20"></div>
      <div className="container">
        <div>
          <h2 className="mb-8 text-2xl font-semibold text-center capitalize lg:mb-12 text-neutral-900 lg:text-3xl">
            Our Team
          </h2>
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map(({ id, name, imageUrl, role }: any) => (
              <section
                key={id}
                className="w-full max-w-xs text-center aspect-square"
              >
                <Image
                  width={320}
                  height={320}
                  className="object-cover object-center w-full h-full mx-auto rounded-lg"
                  src={imageUrl}
                  alt={name}
                />
                <div className="mt-2">
                  <h3 className="text-lg font-medium text-neutral-900">
                    {name}
                  </h3>
                  <span className="mt-1 text-neutral-500">{role}</span>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
