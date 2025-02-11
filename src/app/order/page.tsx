"use client";

import TabsProduct from "@/components/modules/Product/TabsProduct";
import OrderItem from "@/components/ui/OrderItem";
import useMenuTabsStore from "@/stores/useMenuTabsStore";
import { BACKEND_URL } from "@/utils/constants";
import { useEffect, useState } from "react";

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

export default function Order() {
  const [data, setData] = useState<Menu[]>([]);
  const { tab, setTab } = useMenuTabsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${BACKEND_URL}/menu`);
        if (!result.ok) {
          throw new Error("An error occurred while fetching the categories");
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
      className="bg-light-ivory relative pt-16 pb-16"
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
          data
            ?.filter((item) => item.category.name === "Food")
            .map((item) => (
              <OrderItem
                key={item.id}
                category={item.category.name}
                categoryId={item.category.id}
                menuItemId={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
        {tab == 1 &&
          data
            ?.filter((item) => item.category.name === "Drinks")
            .map((item) => (
              <OrderItem
                key={item.id}
                category={item.category.name}
                categoryId={item.category.id}
                menuItemId={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
      </div>
    </section>
  );
}
