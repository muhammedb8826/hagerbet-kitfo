"use client";
import TabsProduct from "@/components/modules/Product/TabsProduct";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import useMenuTabsStore from "../../../stores/useMenuTabsStore";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "@/utils/constants";

const menu = {
  sushi: [
    {
      id: 1,
      title: "Nigiri Set",
      price: 30,
      category: "sushi",
      description:
        "A selection of 6 pieces including Tuna (Maguro), Salmon (Sake), Yellowtail (Hamachi), Eel (Unagi), Shrimp (Ebi), and Octopus (Tako).",
    },
    {
      id: 2,
      title: "Sashimi Platter",
      price: 45,
      category: "sushi",
      description:
        "A chef's choice platter with 10 pieces of fresh, seasonal fish varieties.",
    },
    {
      id: 3,
      title: "Dragon Roll",
      price: 35,
      category: "sushi",
      description:
        "8 pieces of Eel, cucumber, avocado, topped with thin avocado slices.",
    },
    {
      id: 4,
      title: "Rainbow Roll",
      price: 40,
      category: "sushi",
      description:
        "8 pieces of Crab, avocado, cucumber, topped with assorted fish.",
    },
    {
      id: 5,
      title: "Spicy Tuna Roll",
      price: 25,
      category: "sushi",
      description: "6 pieces of Tuna with spicy mayo sauce.",
    },
    {
      id: 6,
      title: "California Roll",
      price: 20,
      category: "sushi",
      description: "6 pieces of Crab, avocado, cucumber.",
    },
    {
      id: 7,
      title: "Kyoto Garden Roll",
      price: 28,
      category: "sushi",
      description:
        "8 pieces of Tempura asparagus, avocado, topped with seared tofu and teriyaki sauce.",
    },
    {
      id: 8,
      title: "Sunset Roll",
      price: 37,
      category: "sushi",
      description:
        "8 pieces of Spicy salmon, mango, topped with tuna and avocado.",
    },
  ],
  ramen: [
    {
      id: 1,
      price: 38,
      category: "ramen",
      title: "Shoyu Ramen",
      description: "Soy sauce-based broth, chicken, nori, menma, scallions",
    },
    {
      id: 2,
      price: 42,
      category: "ramen",
      title: "Tonkotsu  ramen",
      description:
        "Rich pork broth, pork belly, soft-boiled egg, bamboo shoots, green onions",
    },
    {
      id: 3,
      price: 44,
      category: "ramen",
      title: "Miso Ramen",
      description:
        "Miso-based broth, ground pork, corn, butter, bean sprouts, chives",
    },
    {
      id: 4,
      price: 48,
      category: "ramen",
      title: "Spicy Seafood Ramen",
      description:
        "Spicy broth, mixed seafood, mushrooms, bok choy, red ginger",
    },
  ],
};

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

interface Menu {
  id: string;
  name: string;
  price: number;
  description: string;
  category: {
    id: string;
    name: string;
  };
}

export default function Menu({ pb = "md", pt = "md" }: Props) {
  const [data, setData] = useState<Menu[]>([]);
  const { tab, setTab } = useMenuTabsStore();

   useEffect(() => {
     const fetchData = async () => {
       try {
         const result = await fetch(`${BACKEND_URL}/menu`);
         if (!result.ok) {
           throw new Error('An error occurred while fetching the categories');
         }
         const data = await result.json();
         setData(data);
       } catch {
         // toast.error('An error occurred while fetching the submissions');
       }
     };
     fetchData();
   }, []);

  return (
    <section
      id="Menu"
      className={clsx(
        "bg-light-ivory relative",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <div id="menu" className="absolute -top-20"></div>
      <div className="container container--xs">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Our Menu</span>
          </h2>
        </div>

        <TabsProduct tab={tab} setTab={setTab} />

        {tab == 0 &&
          data?.filter((item) => item.category.name === 'Food').map((item) => (
            <MenuItem
              key={item.id}
              title={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        {tab == 1 &&
             data?.filter((item) => item.category.name === 'Drinks').map((item) => (
              <MenuItem
                key={item.id}
                title={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
      </div>
    </section>
  );
}
